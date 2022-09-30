import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessStoriesRoutingModule } from './success-stories-routing.module';
import { SuccessStoriesComponent } from './success-stories.component';


@NgModule({
  declarations: [SuccessStoriesComponent],
  imports: [
    CommonModule,
    SuccessStoriesRoutingModule
  ]
})
export class SuccessStoriesModule { }
