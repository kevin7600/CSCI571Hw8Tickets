import { Component, OnInit } from '@angular/core';

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

  isFavoriteTab:boolean=false;
  
  displayedColumns = ['index', 'date', 'event', 'category', 'venueInfo', 'favorite'];
  constructor(private service:ServicesService){}

  ngOnInit() {
    this.dataSource = this.service.searchResultsObserver;//for server
    this.resultsSource=this.dataSource;
  }

  ShowResultsTab(){
    this.isFavoriteTab=false;
    this.dataSource=this.resultsSource;
  }
  ShowFavoritesTab(){
    this.isFavoriteTab=true;
    this.dataSource=this.service.favoriteSource;
  }
  ShowEventDetails(row){
    this.service.GetEventDetails(row);
  }
}