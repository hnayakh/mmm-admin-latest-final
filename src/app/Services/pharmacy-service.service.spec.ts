import { TestBed } from '@angular/core/testing';

import { PharmacyServiceService } from './pharmacy-service.service';

describe('PharmacyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PharmacyServiceService = TestBed.get(PharmacyServiceService);
    expect(service).toBeTruthy();
  });
});
