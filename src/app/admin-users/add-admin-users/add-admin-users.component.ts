import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AdminService } from "src/app/Services/admin.service";
import { environment } from "src/environments/environment.dev";
import Swal from "sweetalert2";
@Component({
  selector: "add-admin-users",
  templateUrl: "./add-admin-users.component.html",
  styleUrls: ["./add-admin-users.component.css"],
})
export class AddAdminUserComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  AdminList: any;
  constructor(
    private router: Router,
    private adminService: AdminService,
    private formbuilder: FormBuilder
  ) {}
  submitted = false;
  addAdminForm: FormGroup;
  roleList: any;
  ngOnInit() {
    this.roleList = environment.Role;
    this.addAdminForm = this.formbuilder.group(
      {
        email: ["", Validators.required],
        password: ["", Validators.required],
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        confirmPassword: ["", Validators.required],
        role: ["", Validators.required],
        phoneNumber: ["", Validators.required],
        gender: ["", Validators.required],
      },
      { validator: this.passwordConfirming }
    );
  }
  get f() {
    return this.addAdminForm.controls;
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get("password").value !== c.get("confirmPassword").value) {
      return { invalid: true };
    }
  }
  
  
  onSubmit() {
    console.log(this.addAdminForm.value);
    var validRegex = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    this.submitted = true;
    const {
      confirmPassword,
      email,
      firstName,
      gender ,
      lastName,
      password,
      phoneNumber,
      role,
    } = this.addAdminForm.value;
//     if( gender ==  "Male"){
// this.addAdminForm.value.gender
//     }
    // this.addAdminForm.value.gender  ==  "Male" ? 0 :1
    console.log(this.addAdminForm.value.gender,"gender");
    if (!firstName || !lastName) {
      return;
    }
    console.log(validRegex.test(email));

    if (!validRegex.test(email)) {
      return Swal.fire({
        position: "top",
        icon: "error",
        title: "Enter a valid email Address",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (!phoneNumber) {
      return Swal.fire({
        position: "top",
        icon: "error",
        title: "Phone number cannot be empty",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    if (
      this.addAdminForm.value.password !=
      this.addAdminForm.value.confirmPassword
    ) {
      return Swal.fire({
        position: "top",
        icon: "error",
        title: "Password not matched with confirm password",
        showConfirmButton: false,
        timer: 1500,
      });
    }
// return ;
    this.adminService.CreateAdminUser(this.addAdminForm.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(["/admin-users"]);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Succesfully Created",
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (error) => {
        console.log(error);
        Swal.fire({
          position: "top",
          icon: "error",
          title: error.error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }
}
