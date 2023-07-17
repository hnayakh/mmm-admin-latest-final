import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AdminService } from "src/app/Services/admin.service";
import Swal from "sweetalert2";
@Component({
  selector: "app-manage-admin-users",
  templateUrl: "./manage-admin-users.component.html",
  styleUrls: ["./manage-admin-users.component.css"],
})
// import dayjs from "dayjs"
export class ManageAdminUsersComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  AdminList: any []=[];

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    this.getAllAdminUsers();
  }
  getAllAdminUsers() {
    this.adminService.GetAllAdminUsers().subscribe(
      (data: any) => {
        let adminsData = data.data.filter(x => x.isActive == true);
        console.log(adminsData, " this.AdminList");
        let sortedData = adminsData.sort(function (a: any, b: any) {
          var result =  (new Date(b.createdAt).getTime()) - (new Date(a.createdAt).getTime());
          return result;
        });
        this.AdminList = sortedData
        debugger
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
        this.adminService.UpdateAdminUser({ ...id, isActive: false }).subscribe(
          (data: any) => {
            this.getAllAdminUsers()
          },
          (error) => {
            console.log(error);
          }
        );

      } else if (result.isDenied) {
        Swal.fire("Not Deleted", "", "info");
      }
    });
  }
}
