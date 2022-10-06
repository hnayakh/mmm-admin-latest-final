import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MasterService } from "../Services/master.service";

@Component({
  selector: "app-referral-benifits",
  templateUrl: "./referral-benifits.component.html",
  styleUrls: ["./referral-benifits.component.css"],
})
export class ReferralBenifitsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  ActiveUserList: any;
  isReferralActive: any;
  Relationships = [
    "Self",
    "Son",
    "Daughter",
    "Sister",
    "Brother",
    "Friend",
    "Relative",
  ];
  constructor(private router: Router, private masterService: MasterService) {}

  ngOnInit() {
    this.getReferrals();
  }
  getReferrals() {
    this.masterService.getReferal().subscribe(
      (data: any) => {
        console.log(data.data);
        this.isReferralActive = data.data[0].isActive;
      },
      (error) => {}
    );
  }
  onActiveStatusChanged(data) {
    if (data == this.isReferralActive) {
      console.log("truiruire");
    }
    this.masterService.updateAndCreateReferral({ isActive: data }).subscribe(
      (data) => {
        console.log(data);
        this.getReferrals();
      },
      (error) => {}
    );
  }
}
