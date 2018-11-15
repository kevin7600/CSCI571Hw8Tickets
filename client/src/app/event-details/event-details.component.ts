import { Component } from '@angular/core';
import {ServicesService} from '../services.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  eventName="";
  eventDetails={};
  constructor(public service:ServicesService) { 
    this.service.eventDetailsSubject.asObservable().subscribe(temp=>{
      this.eventDetails=temp;
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
