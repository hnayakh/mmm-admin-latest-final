import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPricingRoutingModule } from './product-pricing-routing.module';
import { ProductPricingComponent } from './product-pricing.component';
import { ListConnectComponent } from './connect-list/list-connect.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductPricingComponent,ListConnectComponent],
  imports: [
    CommonModule,
    ProductPricingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class ProductPricingModule { }
