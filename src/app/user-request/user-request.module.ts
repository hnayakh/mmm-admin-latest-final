import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRequestRoutingModule } from './user-request-routing.module';
import { UserRequestComponent } from './user-request.component';


@NgModule({
  declarations: [UserRequestComponent],
  imports: [
    CommonModule,
    UserRequestRoutingModule
  ]
})
export class UserRequestModule { }
