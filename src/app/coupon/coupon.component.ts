import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  ActiveUserList: any;
  Relationships = ["Self", "Son", "Daughter", "Sister", "Brother", "Friend", "Relative"];
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
