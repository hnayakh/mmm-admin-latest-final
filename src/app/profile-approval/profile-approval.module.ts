import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileApprovalRoutingModule } from './profile-approval-routing.module';
import { ProfileApprovalComponent } from './profile-approval.component';


@NgModule({
  declarations: [ProfileApprovalComponent],
  imports: [
    CommonModule,
    ProfileApprovalRoutingModule
  ]
})
export class ProfileApprovalModule { }
