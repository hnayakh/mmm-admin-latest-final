import { Component, OnInit, Pipe } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/Services/user.service";
import { formatDate } from "@angular/common";
@Component({
  selector: "app-verification-list",
  templateUrl: "./verification-list.component.html",
  styleUrls: ["./verification-list.component.css"],
})
export class VerificationListComponent implements OnInit {
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

  // data = [
  //   { name: 'Joe James', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
  //   { name: 'John Walsh', company: 'Test Corp', city: 'Hartford', state: 'CT' },
  //   { name: 'Bob Herm', company: 'Test Corp', city: 'Tampa', state: 'FL' },
  //   { name: 'James Houston', company: 'Test Corp', city: 'Dallas', state: 'TX' },
  // ];

  options: any;
  constructor(private router: Router, private userService: UserService) {}

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
        // this.PendingUserList = response.data.users.map((item) => {
        //   return [
        //     item.displayId.toString().toUpperCase(),
        //     item.name,
        //     item.email,
        //     item.phoneNumber,
        //     this.Gender[item.gender],
        //     formatDate(item.createdAt, "yyyy-MM-dd", "en-US"),
        //     this.Relationships[item.relationship],
        //     item.religion,
        //     item.cast,
        //     item.careerCity,
        //   ];
        // });
      },
      (error) => {}
    );
  }
}
