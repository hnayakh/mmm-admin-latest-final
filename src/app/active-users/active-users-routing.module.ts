import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ManageUserListComponent } from "./manage-user-list/manage-user-list.component";
import { UsersListComponent } from "./users-list/users-list.component";

const routes: Routes = [
  {
    path: "",
    component: UsersListComponent,
  },
  {
    path: "manage/users",
    component: ManageUserListComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActiveUsersRoutingModule {}
