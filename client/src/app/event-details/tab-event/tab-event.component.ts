import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {ServicesService} from '../../services.service';
@Component({
  selector: 'app-tab-event',
  templateUrl: './tab-event.component.html',
  styleUrls: ['./tab-event.component.css']
})

export class TabEventComponent implements OnInit {
  artist:string="";
  venue:string="";
  time:string="";
  category:string="";
  priceRange:string="";
  ticketStatus:string="";
  buyTicketAt:string="";
  seatMap:string="";

  showTab:boolean=false;
  constructor(private service:ServicesService,public dialog: MatDialog) { }

  Reset(){
    this.artist="";
    this.venue="";
    this.time="";
    this.category="";
    this.priceRange="";
    this.ticketStatus="";
    this.buyTicketAt="";
    this.seatMap="";
  }

  ngOnInit() {
    this.service.eventDetailsObserver.subscribe(temp=>{
      this.Reset();
      if (temp['artists']){
        for (let i=0;i<temp['artists'].length;i++){
          this.artist += temp['artists'][i];
          if (i!=temp['artists'].length-1){
            this.artist += ' | ';
          }
        }
      }
      if (temp['venue']){
        this.venue=temp['venue'];
      }
      if (temp['date']){
        this.time += temp['date'] + "  ";
      }
      if (temp['time']){
        this.time += temp['time'];
      }
      if (temp['category']){
        for (let i=0;i<temp['category'].length;i++){
          this.category += temp['category'][i];
          if (i!=temp['category'].length-1){
            this.category += ' | ';
          }
        }
      } 
      if (temp['priceRange']){
        this.priceRange="$" + temp['priceRange'][0] + " ~ $" + temp['priceRange'][1];
      }
      if (temp['ticketStatus']){
        this.ticketStatus += temp['ticketStatus'];
      }
      if (temp['buyTicketAt']){
        this.buyTicketAt += temp['buyTicketAt'];
      }
      if (temp['seatMap']){
        this.seatMap += temp['seatMap'];
      }
    });
    this.showTab=true;
  }
  ShowSeatmap(){
    const dialogRef = this.dialog.open(SeatMapDialog,{
      data: this.seatMap
    });
  }
}

@Component({
  selector: 'randomNameHere',
  templateUrl: './seatMap.html',
})
export class SeatMapDialog{
  myURL="";
  constructor(
    public dialogRef: MatDialogRef<SeatMapDialog>,
    @Inject(MAT_DIALOG_DATA) public data){
      this.myURL=data;
      // console.log(this.myURL);

    }
    Close(){
      this.dialogRef.close();
    }
}

    
  
