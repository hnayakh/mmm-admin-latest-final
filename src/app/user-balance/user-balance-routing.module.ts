import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageUserBalance } from './manage-user-balance/manage-user-balance.component';
import { UserBalanceComponent } from './user-balance.component';


const routes: Routes = [
  {path: "", component: UserBalanceComponent},
  {path: "manage-user-balance/:id", component: ManageUserBalance},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserBalanceRoutingModule { }
