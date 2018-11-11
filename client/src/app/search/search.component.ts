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

  }
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
    console.log(event.target.value);
  }
  getCategory(event: any){
    this.category=event.target.value;
    console.log(this.category);
  }
  getDistanceUnits(event:any){
    this.distanceUnits=event.target.value;
    console.log(this.distanceUnits);
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
    console.log(this.distance);
  }

  getAutoSuggestions(){

    this.autComOps = this.servicesService.getRequestToServer(this.myKeyword);
  }
  onSubmit(){
    alert('success!' + " " + this.myKeyword +" " + this.category + " " + this.distance + " "+this.distanceUnits + " " + this.myOtherLocationText);
  }
  Reset(){
    this.category="default";
    this.distance=10;
    this.distanceUnits="miles";
    this.otherLocationTextDisabled=true;
  }
}
