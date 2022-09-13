import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ManageAdminUsersComponent } from "./manage-admin-users/manage-admin-users.component";

const routes: Routes = [{ path: "", component: ManageAdminUsersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminUsersRoutingModule {}
