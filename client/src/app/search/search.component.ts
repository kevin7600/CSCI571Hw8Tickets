import { Component } from '@angular/core';
import { Services } from '@angular/core/src/view';

import {ServicesService} from '../services.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export  class SearchComponent{

  constructor(private servicesService:ServicesService){
    this.currentLocation=this.servicesService.GetCurrentLocation();
  }
  currentLocation:{lat:number, lon:number}={lat:-1,lon:-1};
  autComOps:string[]=[];
  myKeyword:string = "";
  category:string="default";
  distance:number=10;
  distanceUnits:string="miles";
  myOtherLocationText:string="";
  otherLocationTextDisabled : boolean = true;
  radioChangeHandler(event: any){
    if (event.target.value=="other"){
      this.otherLocationTextDisabled=false;
    }
    else{
      this.otherLocationTextDisabled=true;

    }
  }
  getCategory(event: any){
    this.category=event.target.value;
  }
  getDistanceUnits(event:any){
    this.distanceUnits=event.target.value;
  }
  getDistance(event:any){
    if (event.target.value==""){
      this.distance=10;
    }
    else{
      this.distance=Number(event.target.value);
      if (isNaN(this.distance)){
        console.log("this is NaN");
      }
    }
  }

  getAutoSuggestions(){

    this.autComOps = this.servicesService.sendAutoCompleteRequest(this.myKeyword);
  }
  onSubmit(){
    console.log("category: "+this.category);
    this.servicesService.GetSearchResults(this.myKeyword,this.category,this.distance,
      this.distanceUnits,this.myOtherLocationText,this.otherLocationTextDisabled,this.currentLocation);
  }
  Reset(){
    this.category="default";
    this.distance=10;
    this.distanceUnits="miles";
    this.otherLocationTextDisabled=true;
  }
}
