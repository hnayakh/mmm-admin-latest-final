import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ActiveUsersRoutingModule } from "./active-users-routing.module";
import { UsersListComponent } from "./users-list/users-list.component";
import { ManageUserListComponent } from "./manage-user-list/manage-user-list.component";
import { DataTablesModule } from "angular-datatables";
import { CarouselModule } from "ngx-owl-carousel-o";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
console.log("active");

@NgModule({
  declarations: [UsersListComponent, ManageUserListComponent],
  imports: [
    CommonModule,
    ActiveUsersRoutingModule,
    DataTablesModule,
    CarouselModule,
  ],
})
export class ActiveUsersModule {}
