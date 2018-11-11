import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:Http) { 
    console.log("services initialized");
  }
  AutComCount:number=0;//so newer auto complete requests will overwrite previous requests

  getRequestToServer(keyword:string): string[]{
    this.AutComCount+=1;
    let myAutoComCount=this.AutComCount;
    let results:string[]=[];

    setTimeout(()=>{
      if (myAutoComCount==this.AutComCount){
        console.log("resetting autocomplete...");
        this.http.get('api/autocomplete/'+keyword).subscribe(temp=>{
          const arr=temp.json()["_embedded"]["attractions"];
          for (let i=0; i< arr.length;i++){
    
            results.push(arr[i]['name']);
          }
        });      
      }
    },750);

    return results;
  }
}
