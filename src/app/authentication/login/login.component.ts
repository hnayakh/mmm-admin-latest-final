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
    this.router.navigate(["/dashboard"]);
    // this.sign_api.SignIn(this.signinform.value).subscribe(
    //   (res: any) => {
    //     console.log(res);
    //     localStorage.setItem("token", res.token);
    //     localStorage.setItem("UserName", res.user.name);
    //     localStorage.setItem("id", res.user._id);
    //     this.router.navigate(["/dashboard"]);
    //     if (res.user.name == this.inputUser) {
    //       Swal.fire({
    //         position: "top",
    //         icon: "success",
    //         title: "Successfully Signed",
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //       this.inputUser = this.signinform.value;
    //       console.log(this.signinform.value);
    //     }
    //   },

    //   (error) => {
    //     Swal.fire({
    //       position: "top",
    //       icon: "error",
    //       title: error.error.error,
    //       showConfirmButton: false,
    //       timer: 2500,
    //     });
    //   }
    // );
  }
}
