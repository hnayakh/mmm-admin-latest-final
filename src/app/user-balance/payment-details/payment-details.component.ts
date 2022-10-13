import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/Services/user.service";

@Component({
  selector: "app-payment-details",
  templateUrl: "./payment-details.component.html",
  styleUrls: ["./payment-details.component.css"],
})
export class PaymentDetailsComponent implements OnInit {
  UserId: any;
  RechargeHistory: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.UserId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.getRechargeHistory(this.UserId);
  }

  getRechargeHistory(id: any) {
    this.userService.getRechargeHistory("dbcf9b43-dda5-43e1-aaf8-7d53fa9edb16").subscribe(
      (data: any) => {
        this.RechargeHistory = data.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
