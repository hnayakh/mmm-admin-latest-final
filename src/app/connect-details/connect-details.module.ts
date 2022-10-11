import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectDetailsRoutingModule } from './connect-details-routing.module';
import { ConnectDetailsComponent } from './connect-details.component';


@NgModule({
  declarations: [ConnectDetailsComponent],
  imports: [
    CommonModule,
    ConnectDetailsRoutingModule,
    
  ]
})
export class ConnectDetailsModule { }
