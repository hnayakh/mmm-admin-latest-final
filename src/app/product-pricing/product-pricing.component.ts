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
      connectPrice: ['', Validators.required],
      discountedPrice: ['', Validators.required],
      discount: ['', Validators.required],
      firstTimeBenifitMins: ['', Validators.required],
      secondTimeBenifitMins: ['', Validators.required],
    });
  }

  stopSpaceEnter(event: any) {
    console.log(event.which,'keycode');
    if (String(event.target.value).length == 0 && event.which == 48) {
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

  ErrorMessage:"Please Enter thr Complete Details"
  onFormSubmit() {
    if(this.productPricingForm.invalid){
      debugger
      return this.ErrorMessage
    }
    else{
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
      } 
      else {
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
              this.router.navigateByUrl('/product-pricing')
            },
            (error) => {
              console.log(error);
              Swal.fire('Error While Creating','','error')
            }
          );
      }

    }
  
  }
}
