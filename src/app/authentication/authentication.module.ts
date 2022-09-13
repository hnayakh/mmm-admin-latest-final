import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PagerecoverpwComponent } from './pagerecoverpw/pagerecoverpw.component';
import { TermsconditionComponent } from './termscondition/termscondition.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninService } from '../Services/signin.service';


@NgModule({
  declarations: [LoginComponent, SignupComponent, PagerecoverpwComponent, TermsconditionComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[SigninService]
})
export class AuthenticationModule { }
