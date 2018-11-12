import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { ArrayType } from '@angular/compiler';
import { SearchResultsComponent } from './search-results/search-results.component';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  

  searchResultsSubject= new BehaviorSubject([]);//after clicking "search" this is populated with next value
  searchResultsObserver=this.searchResultsSubject.asObservable();//this is the current value we see
  
  eventDetailsSubject= new BehaviorSubject({});
  eventDetailsObserver=this.eventDetailsSubject.asObservable();

  artistDetailsSubject= new BehaviorSubject({});
  artistDetailsObserver=this.artistDetailsSubject.asObservable();

  constructor(private http:Http) { 
    console.log("services initialized");
  }
  AutComCount:number=0;//so newer auto complete requests will overwrite previous requests

  view=0;//0=searchResults, 1=eventDetails

  sendAutoCompleteRequest(keyword:string): string[]{
    if (!keyword)return;//don't autocomplete when there isn't any keyword
    this.AutComCount+=1;
    let myAutoComCount=this.AutComCount;
    let results:string[]=[];

    setTimeout(()=>{
      if (myAutoComCount==this.AutComCount){
        this.http.get('api/autocomplete/'+keyword).subscribe(temp=>{
          if (temp.json().hasOwnProperty("_embedded") && temp.json()["_embedded"].hasOwnProperty("attractions")){
            const arr=temp.json()["_embedded"]["attractions"];
            for (let i=0; i< arr.length;i++){
              results.push(arr[i]['name']);
            }
          }
          else{
            console.log("no results autocomplete");
          }
        });      
      }
    },750);

    return results;
  }

  GetCurrentLocation(){
    let results={lat:-1, lon:-1};
    this.http.get("http://ip-api.com/json").subscribe(temp=>{
      results['lat']=temp.json()['lat'];
      results['lon']=temp.json()['lon'];
    })
    return results;
  }

  GetSearchResults(keywords:string, category:string,distance:number,distanceUnits:string,
    otherLocationKeywords:string,otherLocationTextDisabled:boolean,curLocation:{lat:number,lon:number}){
    this.http.get('api/searchResults?keywords='+keywords+'&category='+category+'&distance='+distance
    +'&distanceUnits='+distanceUnits+'&otherLocationKeywords='+otherLocationKeywords
    +'&otherLocationTextDisabled='+otherLocationTextDisabled.toString()+'&lat='+curLocation['lat']
    +'&lon='+curLocation['lon']).subscribe(temp=>{
      let arr=temp.json();
      let results=[];
      for (let i=0;i<arr.length;i++){
        results.push({
          id: arr[i]['id']
        , date: arr[i]['dates']['start']['localDate']
        , event: arr[i]['name']
        , category: arr[i]['classifications'][0]['segment']['name']
        , venueInfo: arr[i]['_embedded']['venues'][0]['name']});
      }
      results.sort((a,b)=>{
        return new Date(a.date).getTime()-new Date(b.date).getTime();
      });
      // for (let i=0;i<results.length;i++){
      //   results[i]['id']=i+1;
      //   results[i]['favorite']='X';
      // }
      this.searchResultsSubject.next(results);
    });
  }

  GetEventDetails(id:string){
    //TODO, reset all data
    this.artistDetailsSubject.next({});//resets artists
    var results={};
    this.http.get('api/eventdetails?id='+id).subscribe(temp=>{//gets all details
      let arr=temp.json();
      results={
        artists: [],
        venue: arr['_embedded']['venues'][0]['name'],
        date: arr['dates']['start']['localDate'],
        time: arr['dates']['start']['localTime'],
        category: [arr['classifications'][0]['segment']['name']
                  ,arr['classifications'][0]['genre']['name']],
        ticketStatus: arr['dates']['status']['code'],
        buyTicketAt: arr['url'],
        seatMap: arr['seatmap']['staticUrl']
      };

      if (arr['priceRanges']!=null){
        results['priceRange']=[arr['priceRanges'][0]['min']
                              ,arr['priceRanges'][0]['max']];
      }
      for (let i=0;i<arr['_embedded']['attractions'].length;i++){
        results['artists'].push(arr['_embedded']['attractions'][i]['name']);
      }
      this.eventDetailsSubject.next(results);
      this.view=1;//swap to eventDetails Component
      for (let i=0;i<results['category'].length;i++){//if it's details of music, then get artist info on spotify
        if (results['category'][i].toLowerCase()=='music'){
          this.http.get('api/spotify?artist='+results['artists'][0]).subscribe(temp=>{
            let data=temp.json();
            let artistResults={
              name: data['name'],
              followers: data['followers']['total'],
              popularity: data['popularity'],
              checkAt: data['external_urls']['spotify']
            };
            this.artistDetailsSubject.next(artistResults);
          })
        }
      }

    });

  }
}