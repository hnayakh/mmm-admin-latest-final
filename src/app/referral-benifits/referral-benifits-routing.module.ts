import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralBenifitsComponent } from './referral-benifits.component';


const routes: Routes = [
  {path: "", component: ReferralBenifitsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralBenifitsRoutingModule { }
