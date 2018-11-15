import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  constructor(private http:Http,private datePipe: DatePipe) {
    this.InitializeFavorites();
    this.Reset();
  }

  searchResultsSubject= new BehaviorSubject([]);//after clicking "search" this is populated with next value
  
  eventDetailsSubject= new BehaviorSubject({});//details of an event

  artistsDetailsSubject= new BehaviorSubject([{}]);//details of specific artist(s)

  venueDetailsSubject= new BehaviorSubject({});//details of venue

  upcomingDetailsSubject= new BehaviorSubject([]);
  private servicesIsBusy= false;//if true, show progress bar
  GetServicesIsBusy(){
    return this.servicesIsBusy;
  }
  selectedTab:number=0;//0=results tab, 1=favorites tab


//FAVORITE

  favoritesSubject=new BehaviorSubject([]);
  favoriteSource=this.favoritesSubject.asObservable();//observes favorites

  currentSearchResult={};//if In event details, remember what the results was.. for favorite and detailsButton and highlighting

  private GetFavorites(){
    return JSON.parse(localStorage.getItem('favorites'));
  }
  private SetFavorites(favorites){
    localStorage.setItem('favorites',JSON.stringify(favorites));
    this.favoritesSubject.next(favorites);
  }
  private InitializeFavorites(){
    if (_.isEmpty(this.GetFavorites())){
      this.SetFavorites([]);
    } 
    else{
      this.SetFavorites(this.GetFavorites());
    }
  }

  FavoritesEmpty(){
    return _.isEmpty(JSON.parse(localStorage.getItem('favorites'))); 
  }
  Favorited(row){
    let favorites=this.GetFavorites();
    let index=this.isFav(row);
    if (index){//unfavorited
      favorites.splice(index-1,1);
    }
    else{//favorited
      favorites.push(row);
    }
    this.SetFavorites(favorites);
  }
  isFav(row){//returns index+1 of favorited, 0 if not found
    let favorites=this.GetFavorites();
    for (let i=0;i<favorites.length;i++){
      if (_.isEqual(favorites[i],row)){
        return i+1;
      }
    }
    return 0;
  }
//FAVORITE END

  AutComCount:number=0;//so newer auto complete requests will overwrite previous requests

  view=0;//0=searchResults, 1=eventDetails 2=neither

  ShowResults(){
    this.view=0;
  }
  ShowDetails(){
    this.view=1;
  }
  ShowNone(){
    this.view=2;
  }

  sendAutoCompleteRequest(keyword:string): string[]{
    if (!keyword)return;//don't autocomplete when there isn't any keyword
    this.AutComCount+=1;
    let myAutoComCount=this.AutComCount;
    let results:string[]=[];

    setTimeout(()=>{
      if (myAutoComCount==this.AutComCount){
        this.http.get('api/autocomplete/'+keyword).toPromise().then(temp=>{
          if (temp.json().hasOwnProperty("_embedded") && temp.json()["_embedded"].hasOwnProperty("attractions")){
            const arr=temp.json()["_embedded"]["attractions"];
            for (let i=0; i< arr.length;i++){
              results.push(arr[i]['name']);
            }
          }
        });      
      }
    },750);

    return results;
  }

  GetCurrentLocation(){
    let results={lat:-1, lon:-1};
    this.http.get("http://ip-api.com/json").toPromise().then(temp=>{
      results['lat']=temp.json()['lat'];
      results['lon']=temp.json()['lon'];
    })
    return results;
  }

  GetSearchResults(keywords:string, category:string,distance:number,distanceUnits:string,
    
    otherLocationKeywords:string,otherLocationTextDisabled:boolean,curLocation:{lat:number,lon:number}){
    this.Reset();
    this.servicesIsBusy=true;//show progress bar while searching
    this.ShowResults();

    this.http.get('api/searchResults?keywords='+keywords+'&category='+category+'&distance='+distance
    +'&distanceUnits='+distanceUnits+'&otherLocationKeywords='+otherLocationKeywords
    +'&otherLocationTextDisabled='+otherLocationTextDisabled.toString()+'&lat='+curLocation['lat']
    +'&lon='+curLocation['lon']).toPromise().then(temp=>{
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
      this.searchResultsSubject.next(results);
      this.servicesIsBusy=false;
    });
  }


  GetEventDetails(row:{}){
    this.Reset();
    this.servicesIsBusy=true;//show progress bar while searching
    this.ShowResults()//we still need to show the progress bar of eventResults

    this.currentSearchResult=row;
    let id=row['id'];
    let results={};
    this.http.get('api/eventdetails?id='+id).toPromise().then(temp=>{//gets all details
      if (_.isEmpty(temp.json())){//if event details empty, return empty
        this.eventDetailsSubject.next({});
      }
      else{//not empty, parse details
        let arr=temp.json();
        results={
          artists: [],
          venue: arr['_embedded']['venues'][0]['name'],
          date: arr['dates']['start']['localDate'],
          time: arr['dates']['start']['localTime'],
          category: [arr['classifications'][0]['segment']['name']
                    ,arr['classifications'][0]['genre']['name']],
          ticketStatus: arr['dates']['status']['code'],
          buyTicketAt: arr['url']
        };
        if (arr['seatmap']!=null){
          results['seatMap']= arr['seatmap']['staticUrl'];
        }
        if (arr['priceRanges']!=null){
          results['priceRange']=[arr['priceRanges'][0]['min']
                                ,arr['priceRanges'][0]['max']];
        }
        for (let i=0;i<arr['_embedded']['attractions'].length;i++){
          results['artists'].push(arr['_embedded']['attractions'][i]['name']);
        }
        results['name']=arr['name'];
        
        this.eventDetailsSubject.next(results);
        
        this.GetArtistsDetails(results);//get data for the artist tab (if it is an artist)
  
        this.GetVenueDetails(results['venue']);
  
        this.GetUpcoming(results['venue']);
        this.ShowDetails();//swap to eventDetails Component
      }
      this.servicesIsBusy=false;//done with progress bar

    });
  }

  private GetArtistsDetails(data){//in Artist/team tab of event details. If is an artist, gets info+photos. Else get just photos
    let isMusic=false;//if true, get the artistdetails+photos. else just get the photos
    for (let i=0;i<data['category'].length;i++){//if it's details of music, then get artist info on spotify
      if (data['category'][i].toLowerCase()=='music'){
        isMusic=true;
      }
    }
    let results=[]//array of artistsDetails
      if (isMusic){// GetInfo->GetPhotos->GetName->GetInfo...
        this.GetArtistInfo(data['artists'],0,results); //get artist info
      }
      else{// GetPhotos->GetName->GetPhotos...
        this.GetArtistPhotos(data['artists'],0,results);//get team/sports thingy
      }
  }
  
  private GetArtistInfo(artists:string[],index:number,results:any[]){

    this.http.get('api/spotify?artist='+artists[index]).toPromise().then(temp=>{
      let data=temp.json();
      let info={};
      info['name']= data['name'],
      info['popularity']= data['popularity'],
      info['checkAt']= data['external_urls']['spotify']
      //for adding commas to the followers string 
      info['followers']=this.numberWithCommas(data['followers']['total']);
      if (results.length==index){//initialize a detail 
        results.push({});
      }
      results[index]['info']=info;
      this.GetArtistPhotos(artists,index,results);
    });
  }

  private GetArtistPhotos(artists:string[],index:number,results:any[]){//in Artist/team tab of event details. Gets photos of artist (AND NAME)

    this.http.get(`api/photos?q=`+artists[index]).toPromise().then(temp=>{
        let photos=[];
        for (let j=0;j<temp.json().length;j++){
          photos.push(temp.json()[j]['link']);
        }
        if (results.length==index){//initialize a detail 
          results.push({});
        }
        results[index]['photos']=photos;//push photos
        this.GetArtistName(artists,index,results);
    });
  }

  private GetArtistName(artists:string[],index:number,results:any[]){
    results[index]['name']=artists[index];
    index += 1;
    if (index==artists.length){//end of recursion, send results
      this.artistsDetailsSubject.next(results);
    } 
    else{//continue the recursion
      if (results[0]['info']!=null){//it's an artist, recurse to info function
        this.GetArtistInfo(artists,index,results);
      }
      else{//not an artist, just get the photos 
        this.GetArtistPhotos(artists,index,results);
      }
    } 
  }
  
  private GetUpcoming(venue){
    this.http.get('api/upcoming?venue='+venue).toPromise().then(temp=>{
      if (_.isEmpty(temp.json())){
        this.upcomingDetailsSubject.next([]);
      }
      let results=[];
      for (let i=0;i<temp.json().length;i++){
        let obj=temp.json()[i];
        let result={};
        result['displayName']=obj['displayName'];
        result['artist']=obj['performance'][0]['artist']['displayName'];
        result['date']=obj['start']['date'];
        result['time']=obj['start']['time'];
        result['type']=obj['type'];
        result['uri']=obj['uri'];
        results.push(result);
      }
      this.upcomingDetailsSubject.next(results);
    });
  }
  
  private GetVenueDetails(venue){//venue tab
    this.http.get('api/venue?venue='+venue).toPromise().then(temp=>{
      let results={};
      results['name']=venue;
      let arr=temp.json();
      results['address']=arr['address']['line1'];
      results['city']=arr['city']['name'] +", "+ arr['state']['name'];
      if (arr['boxOfficeInfo']!=null){
        if (arr['boxOfficeInfo']['phoneNumberDetail']!=null){
          results['phoneNumber']=arr['boxOfficeInfo']['phoneNumberDetail'];
        }
        if (arr['boxOfficeInfo']['openHoursDetail']!=null){
          results['openHours']=arr['boxOfficeInfo']['openHoursDetail'];
        }
      }
      if (arr['generalInfo']!=null){
        if (arr['generalInfo']['generalRule']!=null){
          results['generalRule']=arr['generalInfo']['generalRule'];
        }
        if (arr['generalInfo']['childRule']!=null){
          results['childRule']=arr['generalInfo']['childRule'];
        }
      }
      results['lat']=arr['location']['latitude'];
      results['lon']=arr['location']['longitude'];
      this.venueDetailsSubject.next(results);

    });
  }

  Reset(){
    //TODO, reset all data
    this.eventDetailsSubject.next({});//reset event details
    this.artistsDetailsSubject.next([]);//resets tab: artists/teams
    this.venueDetailsSubject.next({});//resets tab: venue
    this.upcomingDetailsSubject.next([]);//resets tab: upcoming
    this.currentSearchResult={};
    this.ShowNone();//show neither results nor details
  }
  private numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  GetFormattedDate(date:string){
    return this.datePipe.transform(new Date(date));
  }

  IsEmpty(data){
    return _.isEmpty(data);
  }
}