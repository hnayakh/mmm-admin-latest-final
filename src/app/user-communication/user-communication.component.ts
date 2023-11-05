import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/Services/user.service";


@Component({
  selector: 'app-user-communication',
  templateUrl: './user-communication.component.html',
  styleUrls: ['./user-communication.component.css']
})
export class UserCommunicationComponent implements OnInit {
  rechargeHistoryUser: any;
  UserId: any;

  constructor( private router: Router,
    private userService: UserService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getRechargeHistoryOfUser(this.UserId);

  }
  getRechargeHistoryOfUser(userId) {
    this.userService.getRechargeHistory("dbcf9b43-dda5-43e1-aaf8-7d53fa9edb16").subscribe(
      (data: any) => {
        console.log(data.data);
        this.rechargeHistoryUser=data.data
        //console.log("this.rechargeHistoryUser",this.rechargeHistoryUser)
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
