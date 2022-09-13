import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SigninService } from "./Services/signin.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "SnahApp";
  constructor(private _signinservices: SigninService, private router: Router) {}
  ngOnInit(): void {
    // Added by Prajna
    if (this._signinservices.loggedIn()) {
      this.router.navigateByUrl("dashboard");
    } else {
      this.router.navigateByUrl("login");
    }
  }
}
