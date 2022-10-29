import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "src/app/Services/user.service";
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-profile-approval',
  templateUrl: './profile-approval.component.html',
  styleUrls: ['./profile-approval.component.css']
})
export class ProfileApprovalComponent implements OnInit {
  
  dtOptions: DataTables.Settings = {};
  PendingUserList: any;
  data: any;
  Relationships = [
    "Self",
    "Son",
    "Daughter",
    "Sister",
    "Brother",
    "Friend",
    "Relative",
  ];
  Gender = ["Male", "Female", "Other"];
  options: any;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.getAllPendingUsers();
    this.options = {
      filterType: "checkbox",
      rowHover: true,
      onRowClick: function (data, value) {
        console.log("wwer");
        this.getAllPendingUsersForEdit(data, value.dataIndex);
      },
    };
  }
  columns = [
    "ID",
    "Name",
    "Email",
    "Mobile",
    "Gender",
    "Joined On",
    "Created By",
    "Religion",
    "Caste",
    "Location",
  ];

  getAllPendingUsersForEdit(data, dataIndex) {
    this.userService.GetAllPendingUsers().subscribe(
      (response: any) => {
        console.log(response);
        // this.PendingUserList = response.data.users;
        let NewPendingUserList = response.data.users.map((item) => {
          return [
            item.displayId.toString().toUpperCase(),
            item.name,
            item.email,
            item.phoneNumber,
            this.Gender[item.gender],
            formatDate(item.createdAt, "yyyy-MM-dd", "en-US"),
            this.Relationships[item.relationship],
            item.religion,
            item.cast,
            item.careerCity,
          ];
        });
        console.log(NewPendingUserList);
        // this.router.navigate([`/manage/verification/$}`])
      },
      (error) => {}
    );
  }
  getAllPendingUsers() {
    this.userService.GetAllPendingUsers().subscribe(
      (response: any) => {
        console.log(response);
         this.PendingUserList = response.data.users;
       
      },
      (error) => {}
    );
  }
}
