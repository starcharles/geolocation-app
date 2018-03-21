import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {AppComponent} from './app.component';
import {GeolocationComponent} from './geolocation/geolocation.component';
import {OthersLocationComponent} from './geolocation/others-location.component';
import {InMemoryDataService} from './service/in-memory-data.service';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    GeolocationComponent,
    OthersLocationComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,
      {delay: 100, passThruUnknownUrl: false}),
    //ng-bootstrap, angular-material,angular/flex-layout
    NgbModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
