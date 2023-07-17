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
  couponList: any []=[];

  DiscountType = {
    Percentage: 0,
    Amount: 1,
  };
  allDiscountTypes;
  allActivationStatus: string[];
  constructor(private router: Router, private masterService: MasterService) {}

  ngOnInit() {
    this.allDiscountTypes = Object.keys(this.DiscountType);

    this.getAllCoupons();
  }
  getAllCoupons() {
    const currentDate = new Date().toISOString().toString().split("T")[0];
    this.masterService.getAllCoupons().subscribe(
      (data: any) => {
        let sortedData = data.data.sort(function (a: any, b: any) {
          var result =  Number(new Date(b.createdAt).getTime()) - Number(new Date(a.createdAt).getTime());
          return result;
        });
        debugger
        this.couponList = sortedData
        debugger
        // this.couponList = data.data.sort((a:any,b:any) =>  Number(new Date (b.createdAt)) - Number(new Date (a.createdAt)))
          // .filter((y: any, i) => y.isActive)
          // .map((c: any) => {
          //   return {
          //     ...c,
          //     expire_status:
          //       c.validTill.toString().split("T")[0] >= currentDate ? "Active" : "Expired",
          //   };
          // });
        console.log("couponList", this.couponList);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteCoupon(id) {
    Swal.fire({
      title: "Do you want to delete?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Delete",
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        let obj = {
          couponCode: id.couponCode,
          validTill: id.validTill,
          discount: id.discount,
          discountType: 0,
          type: 3,
          couponId: id.id,
        };
        this.masterService.updateAndAddCoupon({ ...obj }).subscribe(
          (data: any) => {
            console.log(data);
            Swal.fire("Deleted!", "", "success");
            this.getAllCoupons();
          },
          (error) => {
            console.log(error);
            Swal.fire("Unable to Delete!", "", "error");
          }
        );
      } else if (result.isDenied) {
        Swal.fire("Not Deleted", "", "info");
      }
    });
  }
}
