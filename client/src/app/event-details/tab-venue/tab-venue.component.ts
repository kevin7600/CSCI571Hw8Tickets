import { Component } from '@angular/core';
import {ServicesService} from '../../services.service';

@Component({
  selector: 'app-tab-venue',
  templateUrl: './tab-venue.component.html',
  styleUrls: ['./tab-venue.component.css']
})
export class TabVenueComponent{
  headers={address: "Address", city: "City", phoneNumber: "Phone Number", openHours: "Open Hours", generalRule: "General Rule", childRule: "Child Rule"};
  venueDetails={};
  name:string="";

  constructor(private service:ServicesService) { }

  ngOnInit(){
    this.service.venueDetailsSubject.asObservable().subscribe(temp=>{
      console.log(temp['name']);
      console.log(temp['address']);
      this.name=temp['name'];
      delete temp['name'];
      this.venueDetails=temp;
    });
  }

  GetKeys(){
    return Object.keys(this.venueDetails);
  }
  GetLat(){
    return parseFloat(this.venueDetails['lat']);
  }
  GetLon(){
    return parseFloat(this.venueDetails['lon']);
  }
}
