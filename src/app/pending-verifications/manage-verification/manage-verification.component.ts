import { Component, OnInit, Pipe } from "@angular/core";
import { Router } from "@angular/router";
import { OwlOptions } from "ngx-owl-carousel-o";
@Component({
  selector: "app-verification-list",
  templateUrl: "./manage-verification.component.html",
  styleUrls: ["./manage-verification.component.css"],
})
export class ManageVerificationComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor(private router: Router) {}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   400: {
    //     items: 1
    //   },
    //   740: {
    //     items: 1
    //   },
    //   940: {
    //     items: 1
    //   },
    //   1440: {
    //     items: 1
    //   },
    //   2640: {
    //     items: 1
    //   }
    // },
    nav: false
  }


  slides = [
    { id: 1, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" },
    { id: 2, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" },
    { id: 3, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" },
    { id: 4, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" },
    { id: 5, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" },
    { id: 6, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" },
    { id: 7, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" },
  ];
  ngOnInit() {}
}
