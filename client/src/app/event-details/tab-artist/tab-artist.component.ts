import { Component } from '@angular/core';
import {ServicesService} from '../../services.service';

@Component({
  selector: 'app-tab-artist',
  templateUrl: './tab-artist.component.html',
  styleUrls: ['./tab-artist.component.css']
})
export class TabArtistComponent {
  artistData={};
  constructor(private service:ServicesService) { 
    this.service.artistDetailsObserver.subscribe(temp=>{
      this.artistData=temp;
      console.log(this.artistData);
    })
  }
}
