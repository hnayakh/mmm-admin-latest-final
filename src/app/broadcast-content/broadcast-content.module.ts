import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BroadcastContentRoutingModule } from './broadcast-content-routing.module';
import { BroadcastContentComponent } from './broadcast-content.component';


@NgModule({
  declarations: [BroadcastContentComponent],
  imports: [
    CommonModule,
    BroadcastContentRoutingModule
  ]
})
export class BroadcastContentModule { }
