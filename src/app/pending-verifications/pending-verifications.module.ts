import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PendingVerificationsRoutingModule } from "./pending-verifications-routing.module";
import { VerificationListComponent } from "./verification-list/verification-list.component";
import { ManageVerificationComponent } from "./manage-verification/manage-verification.component";
import { DataTablesModule } from "angular-datatables";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
console.log("active");

@NgModule({
  declarations: [VerificationListComponent,ManageVerificationComponent],
  imports: [CommonModule, PendingVerificationsRoutingModule,DataTablesModule,CarouselModule,BrowserAnimationsModule],
})
export class PendingVerificationsModule {}
