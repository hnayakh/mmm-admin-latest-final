import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { MasterService } from "../Services/master.service";

@Component({
  selector: "app-product-pricing",
  templateUrl: "./product-pricing.component.html",
  styleUrls: ["./product-pricing.component.css"],
})
export class ProductPricingComponent implements OnInit {
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
  connectID: any;
  connectData: any;
  productPricingForm: FormGroup;
  constructor(
    private router: Router,
    private masterService: MasterService,
    private activatedRoute: ActivatedRoute,
    private formbuilder: FormBuilder,
    private location:Location
  ) {
    this.connectID = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    if (this.connectID) {
      this.getConnectById();
    }
    this.productPricingForm = this.formbuilder.group({
      connectPrice: [0, Validators.required],
      discountedPrice: [0, Validators.required],
      discount: [0, Validators.required],
      firstTimeBenifitMins: [0, Validators.required],
      secondTimeBenifitMins: [0, Validators.required],
    });
  }
  getConnectById() {
    this.masterService.getConnectById({ id: this.connectID }).subscribe(
      (data: any) => {
        console.log(data.data);
        this.connectData = data.data;
        this.productPricingForm.setValue({
          connectPrice: data.data.connectPrice,
          discountedPrice: data.data.discountedPrice,
          discount: data.data.discount,
          firstTimeBenifitMins: data.data.firstTimeBenifitMins,
          secondTimeBenifitMins: data.data.secondTimeBenifitMins,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onChangeVaule() {
    let discountPrice =
      (this.productPricingForm.get("connectPrice").value *
        this.productPricingForm.get("discount").value) /
      100;
    let netPrice =
      this.productPricingForm.get("connectPrice").value - discountPrice;
    this.productPricingForm.get("discountedPrice").setValue(netPrice);
  }
  onFormSubmit() {
    if (this.connectID) {
      this.masterService
        .updateAndCreateConnect({
          ...this.productPricingForm.value,
          connectId: this.connectID,
          discountType: 1,
          type: 2,
        })
        .subscribe(
          (data: any) => {
            console.log(data);
            Swal.fire('Updated','','success')

            this.getConnectById();
          },
          (error) => {
            console.log(error);
            Swal.fire('Error While Creating','','error')
          }
        );
    } else {
      this.masterService
        .updateAndCreateConnect({
          ...this.productPricingForm.value,
          discountType: 1,
          type: 1,
        })
        .subscribe(
          (data: any) => {
            console.log(data);
            Swal.fire('Created','','success')
            this.location.back()
          },
          (error) => {
            console.log(error);
            Swal.fire('Error While Creating','','error')
          }
        );
    }
  }
}
