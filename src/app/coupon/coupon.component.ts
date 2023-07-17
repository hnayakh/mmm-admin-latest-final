import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MasterService } from "../Services/master.service";
import * as moment from "moment";
import Swal from "sweetalert2";
@Component({
  selector: "app-coupon",
  templateUrl: "./coupon.component.html",
  styleUrls: ["./coupon.component.css"],
})
export class CouponComponent implements OnInit {
  typeSelected = "0";
  dtOptions: DataTables.Settings = {};
  ActiveUserList: any;
  Relationships = [
    "Self",
    "Son",
    "Daughter",
    "Sister",
    "Brother",
    "Friend",
    "Relative",
  ];
  percenetageDiscount: FormGroup;
  amountDiscount: FormGroup;
  couponId: any;
  id: any;
  couponList: any;
  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private masterService: MasterService
  ) {
    this.couponId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    if (this.couponId) {
      this.getCouponById();
    }

    this.percenetageDiscount = this.formbuilder.group({
      couponCode: ["", Validators.required],
      validTill: ["", Validators.required],
      discount: ["", Validators.required],
    });
    this.amountDiscount = this.formbuilder.group({
      couponCode: ["", Validators.required],
      validTill: ["", Validators.required],
      discount: ["", Validators.required],
    });
  }
  onTypeChange(event) {
    this.typeSelected = event.target.value;
  }
  onSubmitPercentage() {
    console.log(this.percenetageDiscount.value);
    if (this.couponId) {
      this.masterService
        .updateAndAddCoupon({
          ...this.percenetageDiscount.value,
          discountType: 0,
          type: 2,
          couponId: this.id,
        })
        .subscribe(
          (data: any) => {
            console.log(data);
            Swal.fire("Created!", "", "success");
            this.router.navigate(["/coupon"]);
          },
          (error) => {
            console.log(error);
            Swal.fire("Unable to create!", "", "error");
          }
        );
    } else {
      this.masterService
        .updateAndAddCoupon({
          ...this.percenetageDiscount.value,
          discountType: 0,
          type: 1,
        })
        .subscribe(
          (data: any) => {
            console.log(data);
            Swal.fire("Created!", "", "success");
            this.router.navigate(["coupon"]);
          },
          (error) => {
            console.log(error);
            Swal.fire("Unable to create!", "", "error");
          }
        );
    }
  }

  percentValidate(event): boolean {
    if (event.target.value > 100) {
      return false;
    }
  }

  stopSpaceEnter(event: any) {
    console.log(event.which,'keycode');
    debugger
    if (String(event.target.value).length == 0 && event.which == 32) {
      return false;
    }
    if ((((event.keyCode < 65 || event.keyCode > 90) && (event.keyCode < 97 || event.keyCode > 122) && (event.keyCode < 47 || event.keyCode > 58)) && event.keyCode !== 32)) {
      return false;
    }
    return true;
  }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (String(event.target.value).length == 0 && event.which == 48) {
      return false
    }
    else if (event.keyCode != 43 && charCode > 31 && (charCode < 48 || charCode > 57 )) {
      return false;
    }
    return true;
  }
  onSubmitAmount() {
    console.log(this.amountDiscount.value);
    if (this.couponId) {
      this.masterService
        .updateAndAddCoupon({
          ...this.amountDiscount.value,
          discountType: 1,
          type: 2,
          couponId: this.id,
        })
        .subscribe(
          (data: any) => {
            console.log(data);
            Swal.fire("Created!", "", "success");
            this.router.navigate(["coupon"]);
          },
          (error) => {
            console.log(error);
            Swal.fire("Unable to create!", "", "error");
          }
        );
    } else {
      this.masterService
        .updateAndAddCoupon({
          ...this.amountDiscount.value,
          discountType: 1,
          type: 1,
        })
        .subscribe(
          (data: any) => {
            console.log(data);
            Swal.fire("Created!", "", "success");
            this.router.navigate(["coupon"]);
          },
          (error) => {
            console.log(error);
            Swal.fire("Unable to create!", "", "error");
          }
        );
    }
  }
  FormatDate(iDate: Date) {
    var inputDate: Date = new Date(iDate);
    var formattedDate = new Date(
      inputDate.getUTCDate(),
      inputDate.getUTCMonth() + 1,
      inputDate.getUTCFullYear()
    );
    return formattedDate;
  }
  getCouponById() {
    this.masterService.getAllCouponById(this.couponId).subscribe(
      (data: any) => {
        this.couponList = data.data;
        this.id = data.data.id;
        this.typeSelected = data.data.discountType;
        if (data.data.discountType == 0) {
          this.percenetageDiscount.setValue({
            couponCode: data.data.couponCode,
            validTill: moment(data.data.validTill).format("YYYY-MM-DD"),
            discount: data.data.discount,
          });
        } else {
          this.amountDiscount.setValue({
            couponCode: data.data.couponCode,
            validTill: moment(data.data.validTill).format("YYYY-MM-DD"),
            discount: data.data.discount,
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
