import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListConnectComponent } from './connect-list/list-connect.component';
import { ProductPricingComponent } from './product-pricing.component';


const routes: Routes = [
  {path: "", component: ListConnectComponent},
  {path: "manage-product-pricing/:op", component: ProductPricingComponent},
  {path: "manage-product-pricing/:op/:id", component: ProductPricingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPricingRoutingModule { }
