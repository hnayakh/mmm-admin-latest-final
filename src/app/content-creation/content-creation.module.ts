import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentCreationRoutingModule } from './content-creation-routing.module';
import { ContentCreationComponent } from './content-creation.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContentCreationComponent],
  imports: [
    CommonModule,
    ContentCreationRoutingModule,
    DragDropModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ContentCreationModule { }
