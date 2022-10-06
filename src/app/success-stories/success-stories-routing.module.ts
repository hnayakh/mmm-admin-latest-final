import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuccessStoriesComponent } from './success-stories.component';


const routes: Routes = [
  {path: "", component: SuccessStoriesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuccessStoriesRoutingModule { }
