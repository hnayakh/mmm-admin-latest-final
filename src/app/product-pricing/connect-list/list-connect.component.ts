import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AdminService } from "src/app/Services/admin.service";
import { MasterService } from "src/app/Services/master.service";
import Swal from "sweetalert2";
@Component({
  selector: "app-list-component",
  templateUrl: "./list-connect.component.html",
  styleUrls: ["./list-connect.component.css"],
})
export class ListConnectComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  connectList: any;

  constructor(private router: Router, private masterService: MasterService) {}

  ngOnInit() {
    this.getAllCoupons();
  }
  getAllCoupons() {
    this.masterService.getAllConnects().subscribe(
      (data: any) => {
        this.connectList = data.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
