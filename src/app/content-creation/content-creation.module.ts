import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentCreationRoutingModule } from './content-creation-routing.module';
import { ContentCreationComponent } from './content-creation.component';


@NgModule({
  declarations: [ContentCreationComponent],
  imports: [
    CommonModule,
    ContentCreationRoutingModule
  ]
})
export class ContentCreationModule { }
