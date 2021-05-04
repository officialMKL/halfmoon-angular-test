import { TestBed } from '@angular/core/testing';

import { HalfmoonAngularService } from './halfmoon-angular.service';

describe('HalfmoonAngularService', () => {
  let service: HalfmoonAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HalfmoonAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
