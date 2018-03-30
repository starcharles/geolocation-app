import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocationHeaderComponent } from './geolocation-header.component';

describe('GeolocationHeaderComponent', () => {
  let component: GeolocationHeaderComponent;
  let fixture: ComponentFixture<GeolocationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocationHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
