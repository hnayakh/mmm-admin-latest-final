import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PendingVerificationsRoutingModule } from "./pending-verifications-routing.module";
import { VerificationListComponent } from "./verification-list/verification-list.component";
console.log("active");

@NgModule({
  declarations: [VerificationListComponent],
  imports: [CommonModule, PendingVerificationsRoutingModule],
})
export class PendingVerificationsModule {}
