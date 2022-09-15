import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ActiveUsersRoutingModule } from "./active-users-routing.module";
import { UsersListComponent } from "./users-list/users-list.component";
import { ManageUserListComponent } from "./manage-user-list/manage-user-list.component";
import { DataTablesModule } from "angular-datatables";
console.log("active");

@NgModule({
  declarations: [UsersListComponent,ManageUserListComponent],
  imports: [CommonModule, ActiveUsersRoutingModule,DataTablesModule],
})
export class ActiveUsersModule {}
