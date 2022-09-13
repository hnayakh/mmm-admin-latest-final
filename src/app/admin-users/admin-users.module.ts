import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminUsersRoutingModule } from "./admin-users-routing.module";
import { ManageAdminUsersComponent } from "./manage-admin-users/manage-admin-users.component";

@NgModule({
  declarations: [ManageAdminUsersComponent],
  imports: [CommonModule, AdminUsersRoutingModule],
})
export class AdminUsersModule {}
