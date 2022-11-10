import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRequestComponent } from './user-request.component';


const routes: Routes = [
  { path: "", component: UserRequestComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRequestRoutingModule { }
