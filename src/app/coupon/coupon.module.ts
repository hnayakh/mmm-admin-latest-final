import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponRoutingModule } from './coupon-routing.module';
import { CouponComponent } from './coupon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListCouponComponent } from './list-coupon/list-coupon.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [CouponComponent,ListCouponComponent],
  imports: [
    CommonModule,
    CouponRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class CouponModule { }
