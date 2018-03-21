import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersLocationComponent } from './others-location.component';

describe('OthersLocationComponent', () => {
  let component: OthersLocationComponent;
  let fixture: ComponentFixture<OthersLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
