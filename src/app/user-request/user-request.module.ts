import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRequestRoutingModule } from './user-request-routing.module';
import { UserRequestComponent } from './user-request.component';
import { RequestReceiverComponent } from './request-receiver/request-receiver.component';


@NgModule({
  declarations: [UserRequestComponent, RequestReceiverComponent],
  imports: [
    CommonModule,
    UserRequestRoutingModule
  ]
})
export class UserRequestModule { }
