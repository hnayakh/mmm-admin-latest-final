import { Component, OnInit, Pipe } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/Services/user.service";

@Component({
  selector: "app-verification-list",
  templateUrl: "./verification-list.component.html",
  styleUrls: ["./verification-list.component.css"],
})
export class VerificationListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  PendingUserList: any;
  Relationships = ["Self", "Son", "Daughter", "Sister", "Brother", "Friend", "Relative"];
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.getAllPendingUsers();
  }

  getAllPendingUsers() {
    this.userService.GetAllPendingUsers().subscribe(
      (response:any) => {
        console.log(response);
        this.PendingUserList = response.data.users;
      },
      (error) => {}
    );
  }
}
