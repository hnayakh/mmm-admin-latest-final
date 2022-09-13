import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PhysiciansService } from "src/app/Services/physicians.service";

@Component({
  selector: "app-manage-admin-users",
  templateUrl: "./manage-admin-users.component.html",
  styleUrls: ["./manage-admin-users.component.css"],
})
export class ManageAdminUsersComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  PhysicianList: any;

  constructor(
    private get_api_physician: PhysiciansService,
    private router: Router
  ) {}

  ngOnInit() {}

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
