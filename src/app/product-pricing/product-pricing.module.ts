import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPricingRoutingModule } from './product-pricing-routing.module';
import { ProductPricingComponent } from './product-pricing.component';


@NgModule({
  declarations: [ProductPricingComponent],
  imports: [
    CommonModule,
    ProductPricingRoutingModule
  ]
})
export class ProductPricingModule { }
