import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
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
    private formbuilder: FormBuilder
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
            console.log(data)
            this.getConnectById()
          },
          (error) => {
            console.log(error);
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
          console.log(data)
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
