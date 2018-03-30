import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersDistanceComponent } from './others-distance.component';

describe('OthersDistanceComponent', () => {
  let component: OthersDistanceComponent;
  let fixture: ComponentFixture<OthersDistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersDistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
