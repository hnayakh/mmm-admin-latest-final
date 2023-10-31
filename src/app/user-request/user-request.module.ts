import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRequestRoutingModule } from './user-request-routing.module';
import { UserRequestComponent } from './user-request.component';
import { RequestReceiverComponent } from './request-receiver/request-receiver.component';
import { SearchHeaderComponent } from '../search-header/search-header.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [UserRequestComponent, RequestReceiverComponent,SearchHeaderComponent],
  imports: [
    CommonModule,
    MatChipsModule ,
    UserRequestRoutingModule
  ]
})
export class UserRequestModule { }
