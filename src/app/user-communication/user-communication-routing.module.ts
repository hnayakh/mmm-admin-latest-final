import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCommunicationComponent } from './user-communication.component';


const routes: Routes = [
  {path: "", component: UserCommunicationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCommunicationRoutingModule { }
