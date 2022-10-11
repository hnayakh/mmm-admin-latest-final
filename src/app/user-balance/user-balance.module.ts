import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBalanceRoutingModule } from './user-balance-routing.module';
import { UserBalanceComponent } from './user-balance.component';
import { DataTablesModule } from 'angular-datatables';
import { ManageUserBalance } from './manage-user-balance/manage-user-balance.component';

@NgModule({
  declarations: [UserBalanceComponent,ManageUserBalance],
  imports: [
    CommonModule,
    UserBalanceRoutingModule,
    DataTablesModule
  ]
})
export class UserBalanceModule { }
