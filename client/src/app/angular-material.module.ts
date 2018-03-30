import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatSelectModule, MatTableModule, MatTabsModule, MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatToolbarModule,
    MatTabsModule,
  ],
  providers: [],
  // bootstrap: [LoginComponent]
})

export class AngularMaterialModule {
}
