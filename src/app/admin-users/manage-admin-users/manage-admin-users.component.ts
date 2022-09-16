import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AdminService } from "src/app/Services/admin.service";
import Swal from "sweetalert2";
@Component({
  selector: "app-manage-admin-users",
  templateUrl: "./manage-admin-users.component.html",
  styleUrls: ["./manage-admin-users.component.css"],
})
export class ManageAdminUsersComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  AdminList: any;

  constructor(private router: Router, private adminService: AdminService) {}

  ngOnInit() {
    this.getAllAdminUsers();
  }
  getAllAdminUsers() {
    this.adminService.GetAllAdminUsers().subscribe(
      (data: any) => {
        this.AdminList = data.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onRemoveUser(id: any) {
    Swal.fire({
      title: "Do you want to delete?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Delete",
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "", "success");
        console.log(id);
        var index = this.AdminList.map((x) => {
          return x.Id;
        }).indexOf(id);

        this.AdminList.splice(index, 1);
      } else if (result.isDenied) {
        Swal.fire("Not Deleted", "", "info");
      }
    });
  }
}
