import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TablesRoutingModule } from "./tables-routing.module";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { MaterialUiTablesComponent } from "./material-ui-tables/material-ui-tables.component";

@NgModule({
  declarations: [EmployeeListComponent, MaterialUiTablesComponent],
  imports: [CommonModule, TablesRoutingModule],
})
export class TablesModule {}
