import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  eventName="";
  eventDetails={};
  constructor(public service:ServicesService) { }

  ngOnInit() {
    this.service.eventDetailsSubject.asObservable().subscribe(temp=>{
      this.eventDetails=temp;
      this.service.progressBar="0";
    });
  }

  TweetURL(){
    let URL="https://twitter.com/intent/tweet?text=";
    let message="Check out "+this.eventDetails['name']+
      " located at "+this.eventDetails['venue']+
      ". Website: "+this.eventDetails['buyTicketAt']+
      " %23CSCI571EventSearch";
    return URL+message;
  }

}
