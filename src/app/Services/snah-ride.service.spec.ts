import { TestBed } from '@angular/core/testing';

import { SnahRideService } from './snah-ride.service';

describe('SnahRideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnahRideService = TestBed.get(SnahRideService);
    expect(service).toBeTruthy();
  });
});
