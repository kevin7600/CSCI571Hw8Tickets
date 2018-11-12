import { Component, OnInit, ViewChild } from '@angular/core';

import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import {ServicesService} from '../services.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  dataSource;//either set to resultsSource or favoriteSource
  resultsSource;//observes results
  favoriteSource;//observes favorites

  favorites=[];
  favoritesSubject=new BehaviorSubject([]);
  isFavoriteTab:boolean=false;
  
  displayedColumns = ['index', 'date', 'event', 'category', 'venueInfo', 'favorite'];
  constructor(private service:ServicesService){}

  ngOnInit() {
    // this.dataSource=results;//for testing
    this.dataSource = this.service.searchResultsObserver;//for server
    this.favoriteSource= this.favoritesSubject.asObservable();


    this.resultsSource=this.dataSource;
  }
  Favorited(row, event){
    let index=this.isFav(row);
    if (index){//unfavorited
      this.favorites.splice(index-1,1);
    }
    else{//favorited
      this.favorites.push(row);
    }
    this.favoritesSubject.next(this.favorites);
  }
  isFav(row){//returns index+1 of favorited, 0 if not found
    for (let i=0;i<this.favorites.length;i++){
      if (this.favorites[i]==row){
        return i+1;
      }
    }
    return 0;
  }
  ShowResultsTab(){
    this.isFavoriteTab=false;
    this.dataSource=this.resultsSource;
  }
  ShowFavoritesTab(){
    this.isFavoriteTab=true;
    this.dataSource=this.favoriteSource;
  }
  ShowEventDetails(id){
    let details=this.service.GetEventDetails(id);
    console.log(details);
    // console.log(id);
  }
}


const results =[
    {id: "1234ABCD", date: "10-5-2014", event: "sex on beach", category: "nsfw", venueInfo: "idk"},
    {id: "1233ABCD", date: "10-5-2015", event: "sex on beach", category: "nsfw", venueInfo: "idk"},
    {id: "2344ABCD", date: "10-5-2016", event: "sex on beach", category: "nsfw", venueInfo: "idk"},
  ];
