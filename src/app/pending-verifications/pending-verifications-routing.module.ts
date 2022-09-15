import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ManageVerificationComponent } from "./manage-verification/manage-verification.component";
import { VerificationListComponent } from "./verification-list/verification-list.component";

const routes: Routes = [
  { path: "", component: VerificationListComponent },
  { path: "manage/verification/:id", component: ManageVerificationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingVerificationsRoutingModule {}
