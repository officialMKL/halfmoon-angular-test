import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfmoonAngularComponent } from './halfmoon-angular.component';

describe('HalfmoonAngularComponent', () => {
  let component: HalfmoonAngularComponent;
  let fixture: ComponentFixture<HalfmoonAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalfmoonAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfmoonAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
