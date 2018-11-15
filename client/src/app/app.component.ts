import { Component } from '@angular/core';
import {ServicesService} from './services.service';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ServicesService],
  animations: [
    trigger('resultsAnimation', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ]),
    trigger('DetailsAnimation',[
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class AppComponent {
  visible=false;
  constructor(public service:ServicesService){}
}
