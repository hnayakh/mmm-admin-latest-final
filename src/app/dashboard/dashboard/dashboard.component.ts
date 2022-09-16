import { Component, OnInit } from "@angular/core";
import { SigninService } from "src/app/Services/signin.service";
import { SubscriptionService } from "src/app/Services/subscription.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  PhysicianList: any;
  Patienthistory: any;
  totalappointment: any;
  subscriber: any;
  currentDate = Date.now();
  isShow = false;
  flag = 0;
  recentPatients: any;
  constructor(

    private appointment_data: SigninService,
    private redirection: SubscriptionService
  ) {}

  ngOnInit() {
    // let physicianId = localStorage.getItem("id");
    // this.get_api_physician
    //   .getALlDoctorByMedical(physicianId)
    //   .subscribe((response: any) => {
    //     this.PhysicianList = response.data.length;
    //     console.log(this.PhysicianList.length);
    //   }),
    //   this.patients_list.GetPatientsHistory().subscribe((datas: any) => {
    //     this.Patienthistory = datas.data.length;
    //     console.log(this.Patienthistory);
    //   }),
    //   this.GetallAppointmentdata();
    // this.patients_list.GetRecentPatients().subscribe((result: any) => {
    //   this.recentPatients = result.data;
    //   this.flag = 1;
    // });
  }
  // GetallAppointmentdata() {
  //   let parentId = localStorage.getItem("id");
  //   this.appointment_data
  //     .GetAllAppointment(parentId)
  //     .subscribe((result: any) => {
  //       this.totalappointment = result.totalAppointment;
  //     });
  // }
  // NavigateAccToCond() {
  //   let ID = localStorage.getItem("id");
  //   this.redirection.CheckSubscriptionPlan(ID).subscribe((dataa: any) => {
  //     if (dataa.isSubscribed == "yes") {
  //       this.isShow = !this.isShow;
  //     } else {
  //     }
  //   });
  //   console.log("hiiiii", this.isShow);
  // }
}
