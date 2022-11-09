import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/Services/user.service";

@Component({
  selector: "app-manage-user-balance",
  templateUrl: "./manage-user-balance.component.html",
  styleUrls: ["./manage-user-balance.component.css"],
})
export class ManageUserBalance implements OnInit {
  dtOptions: DataTables.Settings = {};
  rechargeHistoryUser: any;
  UserId: any;
  Relationships = [
    "Self",
    "Son",
    "Daughter",
    "Sister",
    "Brother",
    "Friend",
    "Relative",
  ];
  constructor(
    private router: Router,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    this.UserId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.getRechargeHistoryOfUser(this.UserId);
  }

  getRechargeHistoryOfUser(userId) {
    this.userService.getRechargeHistory(userId).subscribe(
      (data: any) => {
        console.log(data.data);
        this.rechargeHistoryUser = data.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
