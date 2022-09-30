import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    FaqRoutingModule,
    AngularDraggableModule,
    DragDropModule,
  
  ]
})
export class FaqModule { }
