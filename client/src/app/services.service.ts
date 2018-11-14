import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  searchResultsSubject= new BehaviorSubject([]);//after clicking "search" this is populated with next value
  
  eventDetailsSubject= new BehaviorSubject({});//details of an event

  artistsDetailsSubject= new BehaviorSubject([{}]);//details of specific artist(s)

  venueDetailsSubject= new BehaviorSubject({});//details of venue

  progressBar= "0";//eventSearch progress bar 0 to 100


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

  constructor(private http:Http) {
    this.InitializeFavorites();
  }
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
    this.http.get("http://ip-api.com/json").toPromise().then(temp=>{
      results['lat']=temp.json()['lat'];
      results['lon']=temp.json()['lon'];
    })
    return results;
  }

  GetSearchResults(keywords:string, category:string,distance:number,distanceUnits:string,
    
    otherLocationKeywords:string,otherLocationTextDisabled:boolean,curLocation:{lat:number,lon:number}){
    this.Reset();
    this.progressBar="50";//show progress bar while searching
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
      // for (let i=0;i<results.length;i++){
      //   results[i]['id']=i+1;
      //   results[i]['favorite']='X';
      // }
      this.searchResultsSubject.next(results);
    });
  }


  GetEventDetails(row:{}){
    this.Reset();
    this.progressBar="50";//show progress bar while searching
    this.ShowResults()//we still need to show the progress bar of eventResults

    this.currentSearchResult=row;
    let id=row['id'];
    var results={};
    this.http.get('api/eventdetails?id='+id).toPromise().then(temp=>{//gets all details
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
      this.ShowDetails();//swap to eventDetails Component
      let artistsDetails=this.GetArtistsDetails(results);//get data for the artist tab (if it is an artist)
      this.artistsDetailsSubject.next(artistsDetails);//update subject
      
      let venueDetails=this.GetVenueDetails(results['venue']);
      this.venueDetailsSubject.next(venueDetails);
    });
  }
  Reset(){
    //TODO, reset all data
    this.eventDetailsSubject.next({});//reset event details
    this.artistsDetailsSubject.next([]);//resets tab: artists/teams
    this.currentSearchResult={};
    this.ShowNone();//show neither results nor details
  }

  private GetVenueDetails(venue){//venue tab
    let results={};
    results['name']=venue;
    this.http.get('api/venue?venue='+venue).toPromise().then(temp=>{
      let arr=temp.json();
      results['address']=arr['address']['line1'];
      results['city']=arr['city']['name'] +", "+ arr['state']['name'];
      if (arr['boxOfficeInfo']!=null){
        results['phoneNumber']=arr['boxOfficeInfo']['phoneNumberDetail'];
        results['openHours']=arr['boxOfficeInfo']['openHoursDetail'];
      }
      if (arr['generalInfo']!=null){
        results['generalRule']=arr['generalInfo']['generalRule'];
        results['generalRule']=arr['generalInfo']['childRule'];
      }
      results['lat']=arr['location']['latitude'];
      results['lon']=arr['location']['longitude'];
    });
    return results;
  }
  private GetArtistsDetails(data){//in Artist/team tab of event details. If is an artist, gets info+photos. Else get just photos
    let isMusic=false;//if true, get the artistdetails+photos. else just get the photos
    for (let i=0;i<data['category'].length;i++){//if it's details of music, then get artist info on spotify
      if (data['category'][i].toLowerCase()=='music'){
        isMusic=true;
      }

    }
    let results=[]//array of artists
    for (let i=0;i<data['artists'].length;i++){//loop through artists and get photos and (?)info
      let name=data['artists'][i];
      let artistDetails={};
      if (isMusic){
        artistDetails['info']=this.GetArtistInfo(name); //get artist info
      }
      artistDetails['photos']=this.GetArtistPhotos(name); //get artist photo
      artistDetails['name']=name;
      results.push(artistDetails); //push artistDetails to artistsDetails
    }
    return results;
  }
  private GetArtistInfo(artist){
    var results={};

    this.http.get('api/spotify?artist='+artist).toPromise().then(temp=>{
      let data=temp.json();
      results['name']= data['name'],
      results['popularity']= data['popularity'],
      results['checkAt']= data['external_urls']['spotify']
      //for adding commas to the followers string 
      results['followers']=this.numberWithCommas(data['followers']['total']);
    });
    return results;
  }

  private GetArtistPhotos(artist){//in Artist/team tab of event details. Gets photos of artist
    var results=[];//set of arrays. each element is photos for a specific artist/team
      this.http.get(`api/photos?q=`+artist).toPromise().then(temp=>{
        for (let j=0;j<temp.json().length;j++){
          results.push(temp.json()[j]['link']);
        }
      });
    return results;
  }
  private numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}