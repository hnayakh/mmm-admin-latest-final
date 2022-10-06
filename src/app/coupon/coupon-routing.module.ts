import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CouponComponent } from './coupon.component';
import { ListCouponComponent } from './list-coupon/list-coupon.component';


const routes: Routes = [
  {path: "", component: ListCouponComponent},
  {path: "manage-coupon/:op", component: CouponComponent},
  {path: "manage-coupon/:op/:id", component: CouponComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponRoutingModule { }
