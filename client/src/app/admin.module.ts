import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MatButtonModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {InMemoryDataService} from './service/in-memory-data.service';
import {environment} from '../environments/environment';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,
      {delay: 100, passThruUnknownUrl: false}),
    //ng-bootstrap, angular-material,angular/flex-layout
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})

export class AdminModule {
}
