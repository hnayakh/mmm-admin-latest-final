import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileApprovalRoutingModule } from './profile-approval-routing.module';
import { ProfileApprovalComponent } from './profile-approval.component';
import { ProfileApprovalListComponent } from './profile-approval-list/profile-approval-list.component';
import { DataTablesModule } from "angular-datatables";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxMuiDatatablesModule } from 'ngx-mui-datatables';
console.log("active");

@NgModule({
  declarations: [ProfileApprovalComponent, ProfileApprovalListComponent],
  imports: [
    CommonModule,
    ProfileApprovalRoutingModule,DataTablesModule,CarouselModule,NgxMuiDatatablesModule
  ]
})
export class ProfileApprovalModule { }
