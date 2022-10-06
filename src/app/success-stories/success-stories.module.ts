import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessStoriesRoutingModule } from './success-stories-routing.module';
import { SuccessStoriesComponent } from './success-stories.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [SuccessStoriesComponent],
  imports: [
    CommonModule,
    SuccessStoriesRoutingModule,
    AngularDraggableModule,
    DragDropModule,
  ]
})
export class SuccessStoriesModule { }
