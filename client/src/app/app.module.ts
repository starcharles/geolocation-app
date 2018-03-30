import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { FormsModule }   from '@angular/forms';
import {MatButtonModule, MatToolbar} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';

import {InMemoryDataService} from './service/in-memory-data.service';
import {AppComponent} from './app.component';
import {GeolocationComponent} from './geolocation/geolocation.component';
import {OthersLocationComponent} from './geolocation/others-location/others-location.component';
import {ChatPanelComponent} from './geolocation/chat-panel/chat-panel.component';
import {GeolocationHeaderComponent} from './geolocation/geolocation-header/geolocation-header.component';
import {environment} from '../environments/environment';
import {ChatInputComponent} from "./geolocation/chat-panel/chat-input/chat-input.component";
import {ChatDisplayComponent} from "./geolocation/chat-panel/chat-display/chat-display.component";
import {OthersDistanceComponent} from "./geolocation/others-distance/others-distance.component";
// import {AdminComponent} from './admin/admin.component';
// import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    GeolocationHeaderComponent,
    GeolocationComponent,
    OthersLocationComponent,
    OthersDistanceComponent,
    ChatPanelComponent,
    ChatInputComponent,
    ChatDisplayComponent
    // AdminComponent,
    // LoginComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,
      {delay: 100, passThruUnknownUrl: false}),
    //ng-bootstrap, angular-material,angular/flex-layout
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgbModule.forRoot(),
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatToolbarModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
