import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/Services/user.service";


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
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
  ) { }

  ngOnInit() {
    this.getRechargeHistoryOfUser(this.UserId);
  }
  getRechargeHistoryOfUser(userId) {
    this.userService.getRechargeHistory("dbcf9b43-dda5-43e1-aaf8-7d53fa9edb16").subscribe(
      (data: any) => {
        console.log(data.data);
        this.rechargeHistoryUser=data.data
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
