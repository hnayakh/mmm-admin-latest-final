import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report/report.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
