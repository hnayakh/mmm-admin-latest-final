import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BroadcastContentComponent } from './broadcast-content.component';


const routes: Routes = [
  {path: "", component: BroadcastContentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BroadcastContentRoutingModule { }
