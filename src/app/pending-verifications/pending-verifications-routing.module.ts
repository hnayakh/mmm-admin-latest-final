import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VerificationListComponent } from "./verification-list/verification-list.component";

const routes: Routes = [{ path: "", component: VerificationListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingVerificationsRoutingModule {}
