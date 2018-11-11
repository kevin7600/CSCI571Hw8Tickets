import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { ArrayType } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  searchResultsSubject= new BehaviorSubject([]);//after clicking "search" this is populated with next value
  searchResultsObserver=this.searchResultsSubject.asObservable();//this is the current value we see
  constructor(private http:Http) { 
    console.log("services initialized");
  }
  AutComCount:number=0;//so newer auto complete requests will overwrite previous requests

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
        results.push({date: arr[i]['dates']['start']['localDate']
        , event: arr[i]['name']
        , category: arr[i]['classifications'][0]['segment']['name']
        , venueInfo: arr[i]['_embedded']['venues'][0]['name']});
      }
      results.sort((a,b)=>{
        return new Date(a.date).getTime()-new Date(b.date).getTime();
      });
      for (let i=0;i<results.length;i++){
        results[i]['id']=i+1;
        results[i]['favorite']='X';
      }
      this.searchResultsSubject.next(results);
    });
  }
}
