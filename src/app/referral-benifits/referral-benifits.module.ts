import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralBenifitsRoutingModule } from './referral-benifits-routing.module';
import { ReferralBenifitsComponent } from '../referral-benifits/referral-benifits.component';


@NgModule({
  declarations: [ReferralBenifitsComponent],
  imports: [
    CommonModule,
    ReferralBenifitsRoutingModule
  ]
})
export class ReferralBenifitsModule { }
