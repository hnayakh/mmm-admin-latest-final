import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { Dashboardroutes } from './dashboard-routing.module';
import { DataTablesModule } from 'angular-datatables';





@NgModule({
  declarations: [DashboardComponent,  ],
  imports: [
    CommonModule,
    DataTablesModule,
    RouterModule.forChild(Dashboardroutes)
    // DashboardRoutingModule
  ]
})
export class DashboardModule { }
