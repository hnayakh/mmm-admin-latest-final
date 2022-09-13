import { TestBed } from '@angular/core/testing';

import { PaymentDetailsService } from './payment-details.service';

describe('PaymentDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentDetailsService = TestBed.get(PaymentDetailsService);
    expect(service).toBeTruthy();
  });
});
