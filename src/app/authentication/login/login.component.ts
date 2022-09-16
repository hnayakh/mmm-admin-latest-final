import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SigninService } from "src/app/Services/signin.service";
import Swal from "sweetalert2";
declare var jQuery: any;
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  inputUser: any;

  constructor(
    private sign_api: SigninService,
    private formbuilder: FormBuilder,
    public router: Router
  ) {}
  submitted = false;
  signinform: FormGroup;
  ngOnInit() {
    this.signinform = this.formbuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  get f() {
    return this.signinform.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.sign_api.SignIn(this.signinform.value).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("UserName", res.data.adminUser.firstName);
        localStorage.setItem("id", res.data.adminUser.id);
        this.router.navigate(["/dashboard"]);
        Swal.fire({
          position: "top",
          icon: "success",
          title: res.message,
          showConfirmButton: false,
          timer: 1500,
        });
        if (res.data.adminUser.firstName == this.inputUser) {
   
          this.inputUser = this.signinform.value;
          console.log(this.signinform.value);
        }
      },
      (error) => {
        console.log(error.error.message);
        Swal.fire({
          position: "top",
          icon: "error",
          title: error.error.message,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    );
  }
}
