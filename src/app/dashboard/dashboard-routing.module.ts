import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";

export const Dashboardroutes: Routes = [
  {
    path: "",
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(Dashboardroutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
