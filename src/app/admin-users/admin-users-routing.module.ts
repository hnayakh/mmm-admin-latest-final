import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddAdminUserComponent } from "./add-admin-users/add-admin-users.component";
import { ManageAdminUsersComponent } from "./manage-admin-users/manage-admin-users.component";

const routes: Routes = [
  {
    path: "",
    component: ManageAdminUsersComponent,
  },
  {
    path: "add-admin",
    component: AddAdminUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminUsersRoutingModule {}
