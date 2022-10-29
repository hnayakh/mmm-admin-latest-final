import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileApprovalListComponent } from './profile-approval-list/profile-approval-list.component';
import { ProfileApprovalComponent } from './profile-approval.component';


const routes: Routes = [
  {path: "", component: ProfileApprovalComponent},
  { path: "profile/approval/list/:id", component: ProfileApprovalListComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileApprovalRoutingModule { }
