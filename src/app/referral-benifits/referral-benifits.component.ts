import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-referral-benifits',
  templateUrl: './referral-benifits.component.html',
  styleUrls: ['./referral-benifits.component.css']
})
export class ReferralBenifitsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  ActiveUserList: any;
  Relationships = ["Self", "Son", "Daughter", "Sister", "Brother", "Friend", "Relative"];
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
