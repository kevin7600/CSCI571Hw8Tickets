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

  dataSource: SearchResultsDataSource;
  displayedColumns = ['id', 'date', 'event', 'category', 'venueInfo', 'favorite'];
  constructor(private servicesService:ServicesService){}

  ngOnInit() {
    this.dataSource = new SearchResultsDataSource(this.servicesService.searchResultsObserver);
  }
}

export class SearchResultsDataSource extends DataSource<any> {
  constructor(public observer: Observable<any[]>) {super();}

  connect(): Observable<any[]> {
    return this.observer;
  }
  disconnect() {}
}