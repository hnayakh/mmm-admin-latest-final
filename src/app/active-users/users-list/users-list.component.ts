import { Component, OnInit, Pipe } from "@angular/core";
import { Router } from "@angular/router";
import { PhysiciansService } from "src/app/Services/physicians.service";

@Component({
  selector: "app-physician-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"],
})
@Pipe({
  name: "phone",
})
export class UsersListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  PhysicianList: any;

  constructor(
    private get_api_physician: PhysiciansService,
    private router: Router
  ) {}

  ngOnInit() {
    // let physicianId = localStorage.getItem("id");
    // this.get_api_physician
    //   .getALlDoctorByMedical(physicianId)
    //   .subscribe((response: any) => {
    //     this.PhysicianList = response.data;
    //     console.log(this.PhysicianList);
    //   });
  }
  // deletePhysician(id) {
  //   this.get_api_physician
  //     .deletePhysicianDepartmentById(id)
  //     .subscribe((result) => {
  //       console.log(result);
  //       Swal.fire({
  //         title: "Are you sure you want to delete this profile?",
  //         // text: "You won't be able to revert this!",
  //         icon: "warning",
  //         showCancelButton: true,
  //         confirmButtonColor: "#3085d6",
  //         cancelButtonColor: "#d33",
  //         confirmButtonText: "Yes, delete it!",
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //           Swal.fire(
  //             "Deleted!",
  //             "Physician Profile has been deleted.",
  //             "success"
  //           );
  //         }
  //         let physicianId = localStorage.getItem("id");
  //         this.get_api_physician
  //           .getALlDoctorByMedical(physicianId)
  //           .subscribe((response: any) => {
  //             this.PhysicianList = response.data;
  //             console.log(this.PhysicianList);
  //           });
  //       });
  //     });
  // }
  viewPhysicianById(id) {
    this.router.navigate(["/physician/physicionprofile/" + id]);
  }
  EditPhysician(id) {
    this.router.navigate(["/physician/editphysicion/" + id]);
    sessionStorage.setItem("editPhyId", id);
  }

  transform(tel) {
    var value = tel.toString().trim().replace(/^\+/, "");

    if (value.match(/[^0-9]/)) {
      return tel;
    }

    var country, city, number;

    switch (value.length) {
      case 10: // +1PPP####### -> C (PPP) ###-####
        country = 1;
        city = value.slice(0, 3);
        number = value.slice(3);
        break;

      case 11: // +CPPP####### -> CCC (PP) ###-####
        country = value[0];
        city = value.slice(1, 4);
        number = value.slice(4);
        break;

      case 12: // +CCCPP####### -> CCC (PP) ###-####
        country = value.slice(0, 3);
        city = value.slice(3, 5);
        number = value.slice(5);
        break;

      default:
        return tel;
    }

    if (country == 1) {
      country = "";
    }

    number = number.slice(0, 3) + "-" + number.slice(3);

    return (country + city + "-" + number).trim();
  }
}
