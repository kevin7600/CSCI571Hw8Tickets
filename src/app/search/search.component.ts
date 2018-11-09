import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export  class SearchComponent{
  formData = {};
  category:string="default";
  distance:number=10;
  distanceUnits:string="miles";
  title = 'client';
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
  onSubmit(){
    alert('success!' + JSON.stringify(this.formData)+ this.category + " " + this.distance + " "+this.distanceUnits);
  }
  Reset(){
    this.category="default";
    this.distance=10;
    this.distanceUnits="miles";
    this.otherLocationTextDisabled=true;
  }
}
