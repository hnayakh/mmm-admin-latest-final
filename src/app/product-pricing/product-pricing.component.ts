import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-product-pricing',
  templateUrl: './product-pricing.component.html',
  styleUrls: ['./product-pricing.component.css']
})
export class ProductPricingComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  ActiveUserList: any;
  Relationships = ["Self", "Son", "Daughter", "Sister", "Brother", "Friend", "Relative"];
  constructor(private router: Router) {}

  ngOnInit() {
  
  }
  updateName() {
  
  }
  
}
