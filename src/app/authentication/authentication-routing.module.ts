import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { PagerecoverpwComponent } from "./pagerecoverpw/pagerecoverpw.component";
import { SignupComponent } from "./signup/signup.component";
import { TermsconditionComponent } from "./termscondition/termscondition.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "forget_password",
    component: PagerecoverpwComponent,
  },
  {
    path: "terms",
    component: TermsconditionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
