import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralBenifitsComponent } from './referral-benifits.component';

describe('ReferralBenifitsComponent', () => {
  let component: ReferralBenifitsComponent;
  let fixture: ComponentFixture<ReferralBenifitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralBenifitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralBenifitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
