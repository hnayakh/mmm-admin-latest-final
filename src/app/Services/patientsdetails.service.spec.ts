import { TestBed } from '@angular/core/testing';

import { PatientsdetailsService } from './patientsdetails.service';

describe('PatientsdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientsdetailsService = TestBed.get(PatientsdetailsService);
    expect(service).toBeTruthy();
  });
});
