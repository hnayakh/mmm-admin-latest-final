import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConnectDetailsComponent } from "./connect-details/connect-details.component";
import { ManageUserBalance } from "./manage-user-balance/manage-user-balance.component";
import { PaymentDetailsComponent } from "./payment-details/payment-details.component";
import { UserBalanceComponent } from "./user-balance.component";

const routes: Routes = [
  { path: "", component: UserBalanceComponent },
  { path: "manage-user-balance/:id", component: ManageUserBalance },
  {
    path: "manage-user-balance/:id/connect-details",
    component: ConnectDetailsComponent,
  },
  {
    path: "manage-user-balance/:id/payment-details",
    component: PaymentDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserBalanceRoutingModule {}
