import { Component, OnInit, Pipe } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "manage-user-list",
  templateUrl: "./manage-user-list.component.html",
  styleUrls: ["./manage-user-list.component.css"],
})
export class ManageUserListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  PhysicianList: any;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    
  }

}