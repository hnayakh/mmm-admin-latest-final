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
  paymentDetails: any;
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
    this.userService.getRechargeHistory(id).subscribe(
      (data: any) => {
        this.RechargeHistory = data.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
