import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ActiveUsersRoutingModule } from "./active-users-routing.module";
import { UsersListComponent } from "./users-list/users-list.component";
console.log("active");

@NgModule({
  declarations: [UsersListComponent],
  imports: [CommonModule, ActiveUsersRoutingModule],
})
export class ActiveUsersModule {}
