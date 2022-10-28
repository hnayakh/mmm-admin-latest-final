import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileApprovalComponent } from './profile-approval.component';


const routes: Routes = [
  {path: "", component: ProfileApprovalComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileApprovalRoutingModule { }
