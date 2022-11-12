import { Component, OnInit } from '@angular/core';
import { OwlOptions } from "ngx-owl-carousel-o";
import { MasterService } from 'src/app/Services/master.service';

import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

import {
  MotherOccupation,
  Gender,
  MaritalStatus,
  ChildrenStatus,
  EatingHabit,
  SmokingHabit,
  DrinkingHabit,
  Manglik,
  AnualIncome,
} from "src/app/shared/enums/user-profile.enum";
@Component({
  selector: 'app-request-receiver',
  templateUrl: './request-receiver.component.html',
  styleUrls: ['./request-receiver.component.css']
})
export class RequestReceiverComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  PendingUserData: any;
  UserId: any;
  constructor(
    private router: Router,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    console.log(this.activatedRoute.snapshot.params.id);
    this.UserId = this.activatedRoute.snapshot.params.id;
   }
   customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ["&#8249", "&#8250;"],
    nav: false,
  };
  slides = [];
  ngOnInit() {
    this.GetUserProfileData(this.UserId);

  }
 
GetUserProfileData(id: any) {
    this.userService.GetUserProfile(id).subscribe(
      (response: any) => {
        console.log(response);
        this.PendingUserData = response;
        this.slides = response;
      },
      (error) => {}
    );
  }
  getGender(idx) {
    return Gender[idx];
  }
  getMaritalStatus(idx) { 
    return MaritalStatus[idx];
  }
  getChildrenStatus(idx) {
    return ChildrenStatus[idx];
  }

  getEatingHabit(idx) {
    return EatingHabit[idx];
  }
  getSmokingHabit(idx) {
    return SmokingHabit[idx];
  }
  getDrinkingHabits(idx) {
    return DrinkingHabit[idx];
  }
  getMangalik(idx){
    return Manglik[idx]
  }
  getAnnualIncome(idx){
    return AnualIncome[idx]
  }


}
