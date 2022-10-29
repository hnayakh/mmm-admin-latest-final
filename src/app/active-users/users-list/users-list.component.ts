import { Component, OnInit, Pipe } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/Services/user.service";
// import { PhysiciansService } from "src/app/Services/physicians.service";

@Component({
  selector: "app-physician-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"],
})

export class UsersListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  ActiveUserList: any;
  
  Relationships = ["Self", "Son", "Daughter", "Sister", "Brother", "Friend", "Relative"];
 
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.GetAllActiveUsers()
  }
  GetAllActiveUsers() {
    this.userService.GetActiveUSers().subscribe(
      (data:any) => {
        console.log(data);
        this.ActiveUserList=data.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
 
}
