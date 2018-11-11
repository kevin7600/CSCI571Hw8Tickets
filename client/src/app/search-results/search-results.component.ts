import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SearchResultsDataSource } from './search-results-datasource';

import {ServicesService} from '../services.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: SearchResultsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'date', 'event', 'category', 'venueInfo', 'favorite'];

  constructor(private servicesService:ServicesService){

  }
  ngOnInit() {
    this.dataSource = new SearchResultsDataSource(this.paginator, this.sort, this.servicesService);
  }
}
