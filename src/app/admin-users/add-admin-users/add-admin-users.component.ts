import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
    this.addAdminForm = this.formbuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      confirmPassword: ["", Validators.required],
      role: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      gender: ["", Validators.required],
    });
  }
  get f() {
    return this.addAdminForm.controls;
  }
  onSubmit() {
    console.log(this.addAdminForm.value);
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
