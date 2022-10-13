import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBalanceRoutingModule } from './user-balance-routing.module';
import { UserBalanceComponent } from './user-balance.component';
import { DataTablesModule } from 'angular-datatables';
import { ManageUserBalance } from './manage-user-balance/manage-user-balance.component';
import { ConnectDetailsComponent } from './connect-details/connect-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

@NgModule({
  declarations: [UserBalanceComponent,ManageUserBalance,ConnectDetailsComponent,PaymentDetailsComponent],
  imports: [
    CommonModule,
    UserBalanceRoutingModule,
    DataTablesModule
  ]
})
export class UserBalanceModule { }
