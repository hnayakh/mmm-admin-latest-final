import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestReceiverComponent } from './request-receiver/request-receiver.component';
import { UserRequestComponent } from './user-request.component';


const routes: Routes = [
  { path: "", component: UserRequestComponent },

  { path: "request/receiver/:id", component: RequestReceiverComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRequestRoutingModule { }
