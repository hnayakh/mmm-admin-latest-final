import { Component, OnInit, Pipe } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { OwlOptions } from "ngx-owl-carousel-o";
import { UserService } from "src/app/Services/user.service";
import Swal from "sweetalert2";
@Component({
  selector: "app-verification-list",
  templateUrl: "./manage-verification.component.html",
  styleUrls: ["./manage-verification.component.css"],
})
export class ManageVerificationComponent implements OnInit {
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
    nav: false,
  };

  slides = [];
  ngOnInit() {
    this.GetUserProfileData(this.UserId);
  }
  GetUserProfileData(id: any) {
    this.userService.GetUserProfile(id).subscribe(
      (response: any) => {
        console.log(response.data);
        this.PendingUserData = response.data;
        this.slides = response.data.userImages;
      },
      (error) => {}
    );
  }

  VerifyUser() {
    Swal.fire({
      title: "Do you want to Verify?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Verify",
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.userService.VerifyUser(this.UserId).subscribe(
          (response: any) => {
            console.log(response.data);
            Swal.fire("Verified!", "", "success");
            this.router.navigate(["/pending-verifications"]);
          },
          (error) => {
            console.log(error);
          }
        );
      } else if (result.isDenied) {
        Swal.fire("Canceled", "", "info");
      }
    });
  }
  RejectUser() {
    Swal.fire({
      title: "Do you want to Reject this User?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Reject",
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.userService.RejectUser(this.UserId).subscribe(
          (response: any) => {
            console.log(response.data);
            Swal.fire("Verified!", "", "success");
            this.router.navigate(["/pending-verifications"]);
          },
          (error) => {
            console.log(error);
          }
        );
      } else if (result.isDenied) {
        Swal.fire("Canceled", "", "info");
      }
    });
  }
}
