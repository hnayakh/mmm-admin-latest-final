import { TestBed } from '@angular/core/testing';

import { ReportAndrevnueService } from './report-andrevnue.service';

describe('ReportAndrevnueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportAndrevnueService = TestBed.get(ReportAndrevnueService);
    expect(service).toBeTruthy();
  });
});
