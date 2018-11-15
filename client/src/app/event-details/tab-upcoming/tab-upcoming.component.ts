import { Component } from '@angular/core';
import {ServicesService} from '../../services.service'
import * as _ from 'lodash';


@Component({
  selector: 'app-tab-upcoming',
  templateUrl: './tab-upcoming.component.html',
  styleUrls: ['./tab-upcoming.component.css']
})
export class TabUpcomingComponent {

  upcomingDetails;//[{artist,date,displayName,time,type}]
  defaultUpcomingDetails;//for default sort
  keys = ['default,displayName,time,artist,type'];
  order: number = 1; //1 asc, -1 desc;
  currentCategory="default";
  constructor(private service:ServicesService) {
    this.service.upcomingDetailsSubject.asObservable().subscribe(temp=>{
      this.upcomingDetails=_.cloneDeep(temp);
      this.defaultUpcomingDetails=_.cloneDeep(temp);
      this.currentCategory="default";
      this.order=1;
    }); 
  }
  Reverse(stringOrder:string){
    if (stringOrder=="ascending"){
      this.order=1;
    }
    else{
      this.order=-1;
    }
    this.Sort(this.currentCategory);
  }

  Sort(category:string){
    this.currentCategory=category;
    if (category=="default"){
      this.upcomingDetails=_.cloneDeep(this.defaultUpcomingDetails);
    }
    else{
      this.upcomingDetails= this.upcomingDetails.sort((a:{}, b:{})=>{
        if (category=="time"){//concatenate date and time
          let time1=a['time'];
          let time2=b['time'];
          if (time1==null){
            time1="00:00:00";
          }
          if (time2==null){
            time2="00:00:00";
          }
          let first=new Date(a['date']);

          let second=new Date(b['date']);

          if (Math.abs(first.getTime()-second.getTime())<10000){//same date, decide by hour
            let hour:number=parseInt(time1.substring(0,2),10)-parseInt(time2.substring(0,2),10);
            if (hour==0){//same hour, decide by minutes
              let minutes:number=parseInt(time1.substring(3,5),10)-parseInt(time2.substring(3,5),10);
              if (minutes==0){//same minutes, decide by seconds
                let seconds:number=parseInt(time1.substring(6,8),10)-parseInt(time2.substring(6,8),10);
                return seconds*this.order;
              }
              return minutes*this.order;
            }
            return hour*this.order;
          }
          else{
            return (first.getTime()-second.getTime())*this.order;
          }
        }
        else{//normal stuff
          return a[category].localeCompare(b[category])*this.order;
        }
      });
    }
  }
}