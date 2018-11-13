import { Component } from '@angular/core';
import {ServicesService} from '../../services.service';

@Component({
  selector: 'app-tab-artist',
  templateUrl: './tab-artist.component.html',
  styleUrls: ['./tab-artist.component.css']
})
export class TabArtistComponent {
  artistsDetails=[];

  constructor(private service:ServicesService) { 
    this.service.artistsDetailsObserver.subscribe(temp=>{
      this.artistsDetails=temp;
    });
  }
  HasArtist(){//if music artist, true. if sports or something, false
    return this.artistsDetails.length!=0 && this.artistsDetails[0]['info']!=null;
    // return Object.keys(this.artistData).length!=0;
  }
}
