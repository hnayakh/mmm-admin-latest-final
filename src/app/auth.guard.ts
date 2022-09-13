import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { SigninService } from "src/app/Services/signin.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private _signinservices: SigninService, public _router: Router) {}

  canActivate(): boolean {
    if (this._signinservices.loggedIn()) {
      return true;
    } else {
      return true;
    }
  }
}
