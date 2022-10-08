import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentCreationComponent } from './content-creation.component';


const routes: Routes = [
  {path: "", component: ContentCreationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentCreationRoutingModule { }
