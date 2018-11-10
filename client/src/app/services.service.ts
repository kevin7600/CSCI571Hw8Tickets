import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:Http) { 
    console.log("services initialized");
  }
  getRequestToServer(){
    console.log("getting request to server...");
    return this.http.get('api/autocomplete');
  }
}
