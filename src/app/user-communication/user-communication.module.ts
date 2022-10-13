import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCommunicationRoutingModule } from './user-communication-routing.module';
import { UserCommunicationComponent } from './user-communication.component';


@NgModule({
  declarations: [UserCommunicationComponent],
  imports: [
    CommonModule,
    UserCommunicationRoutingModule
  ]
})
export class UserCommunicationModule { }
