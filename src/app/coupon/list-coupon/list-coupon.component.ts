import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AdminService } from "src/app/Services/admin.service";
import { MasterService } from "src/app/Services/master.service";
import Swal from "sweetalert2";
@Component({
  selector: "app-coupon-component",
  templateUrl: "./list-coupon.component.html",
  styleUrls: ["./list-coupon.component.css"],
})
export class ListCouponComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  couponList: any;

  constructor(private router: Router, private masterService: MasterService) {}

  ngOnInit() {
    this.getAllCoupons();
  }
  getAllCoupons() {
    this.masterService.getAllCoupons().subscribe(
      (data: any) => {
        this.couponList = data.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
