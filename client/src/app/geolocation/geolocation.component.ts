import {Component, Input, OnInit} from '@angular/core';
import {AppState} from '../models/AppState';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css'],
  providers: []
})

export class GeolocationComponent implements OnInit {

  @Input() state: AppState;

  constructor() {
  }

  ngOnInit() {
  }
}
