import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { MatDialogModule, MatListModule, MatTabsModule, MatTooltipModule, MatAutocompleteModule,MatFormFieldModule,MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchResultsComponent } from './search-results/search-results.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { TabEventComponent, SeatMapDialog } from './event-details/tab-event/tab-event.component';
import { TabArtistComponent } from './event-details/tab-artist/tab-artist.component';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent,
    EventDetailsComponent,
    TabEventComponent,
    SeatMapDialog,
    TabArtistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatTabsModule,
    MatListModule,
    MatDialogModule,
    RoundProgressModule

  ],
  providers: [],
  entryComponents: [SeatMapDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
