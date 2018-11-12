import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor(public service:ServicesService) { }

  ngOnInit() {
  }
  ShowSearchResults(){
    this.service.view=0;
  }
}
