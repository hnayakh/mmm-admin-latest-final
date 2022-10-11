import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectDetailsComponent } from './connect-details.component';


const routes: Routes = [
  {path: "", component: ConnectDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectDetailsRoutingModule { }
