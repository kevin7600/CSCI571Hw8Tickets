import { Component, OnInit } from '@angular/core';

import {ServicesService} from '../services.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  dataSource;//either set to resultsSource or favoriteSource
  resultsSource;//observes results
  resultsEmpty:boolean=true;//for deciding whether to show empty error message
  isFavoriteTab:boolean=false;
  
  displayedColumns = ['index', 'date', 'event', 'category', 'venueInfo', 'favorite'];
  constructor(private service:ServicesService){}

  ngOnInit() {
    this.dataSource = this.service.searchResultsSubject.asObservable();//for server
    this.resultsSource=this.dataSource;
    this.service.searchResultsSubject.asObservable().subscribe(temp=>{
      this.service.progressBar="0";
      this.resultsEmpty= (temp.length==0);

    });
    
  }

  DisplayEvent(event:string){
      for (let i=35;i<event.length;i++){
        if (event[i]==' '){//cut string here, add ..., return
          return event.substring(0,i)+" ...";
        }
      }
      return event;//no need to cut string
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
  EventDetailsView():number{//should it show: 1=search results, 2=no results message, or 3=progress bar?
    if (this.service.progressBar!="0"){//if progress bar isn't 0, always show it
      return 3;
    }
    else if  (this.resultsEmpty){//show no results message
      return 2;
    }
    else{//show search results
      return 1;
    }
  }
  IsSelectedResult(row){
    return _.isEqual(row,this.service.currentSearchResult);
  }

  HasSelectedResult(){
    return _.isEmpty(this.service.currentSearchResult);
  }
}