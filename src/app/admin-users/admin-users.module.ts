import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminUsersRoutingModule } from "./admin-users-routing.module";
import { ManageAdminUsersComponent } from "./manage-admin-users/manage-admin-users.component";
import { DataTablesModule } from "angular-datatables";
import { AddAdminUserComponent } from "./add-admin-users/add-admin-users.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ManageAdminUsersComponent,AddAdminUserComponent],
  imports: [CommonModule, AdminUsersRoutingModule,DataTablesModule,FormsModule,ReactiveFormsModule],
})
export class AdminUsersModule {}
