import { Component, OnInit, Pipe } from "@angular/core";
import { Router } from "@angular/router";
import { MasterService } from "src/app/Services/master.service";
import { UserService } from "src/app/Services/user.service";
// import { PhysiciansService } from "src/app/Services/physicians.service";

@Component({
  selector: "app-physician-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"],
})
export class UsersListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  ActiveUserList: any;
  masterData:any;
  motherTongueList:any;
  religionList:any
  searchText = "";
  gender = 3;
  createdBy = 7;
  religion = "";
  caste = "";
  motherTongue = "";
  country = "";
  locationState = "";
  location = "";
  date = "";
  selectedEndDate = "";
  countryList: any;
  stateList: any;
  isVerified=1;
  Relationships = [
    "Self",
    "Son",
    "Daughter",
    "Sister",
    "Brother",
    "Friend",
    "Relative",
  ];
  cityList: any;

  constructor(
    private router: Router,
    private userService: UserService,
    private masterService: MasterService
  ) {}

  ngOnInit() {
    this.GetAllActiveUsers();
    this.getALlMasterData();
  }

  getALlMasterData() {
    this.masterService.getAllMasterData().subscribe(
      (data: any) => {
        console.log('teststststs',data);
        this.masterData=data&&data.data&&data.data.profileRawData
      },
      (error) => {
        console.log(error);
      }
    );
    this.masterService.getAllCounties().subscribe(
      (data: any) => {
        console.log(data);
        this.countryList = data.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  GetAllActiveUsers(
    isVerified=1,
    searchText = "",
    gender = 3,
    createdFor = 7,
    religion = "",
    caste = "",
    motherTongue = "",
    country = "",
    state = "",
    location = "",
    createdFrom = "",
    createdTo = ""
  ) {
    this.userService
      .GetActiveUSers(
        isVerified,
        searchText,
        gender,
        createdFor,
        religion,
        caste,
        motherTongue,
        country,
        state,
        location,
        createdFrom,
        createdTo
      )
      .subscribe(
        (data: any) => {
          console.log(data);
          this.ActiveUserList = data.data;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  onChangeGender(event) {
    console.log(event.target.value);
    this.gender = event.target.value;
    if (event.target.value == 3) {
      this.GetAllActiveUsers();
    } else {
      this.GetAllActiveUsers(
        this.isVerified,
        this.searchText,
        event.target.value,
        this.createdBy,
        this.religion,
        this.caste,
        this.motherTongue,
        this.country,
        this.locationState,
        this.location,
        this.date,
        this.selectedEndDate
      );
    }
  }
  onChangeMotherTongue(event){
    this.GetAllActiveUsers(
      this.isVerified,
      this.searchText,
      this.gender,
      this.createdBy,
      this.religion,
      this.caste,
      event.target.value,
      this.country,
      this.locationState,
      this.location,
      this.date,
      this.selectedEndDate
    );
  }

  onCreatedForChange(event) {
    console.log(event.target.value);
    this.createdBy = event.target.value;
    if (event.target.value == 7) {
      this.GetAllActiveUsers();
    } else {
      this.GetAllActiveUsers(
        this.isVerified,
        this.searchText,
        this.gender,
        event.target.value,
        this.religion,
        this.caste,
        this.motherTongue,
        this.country,
        this.locationState,
        this.location,
        this.date,
        this.selectedEndDate
      );
    }
  }
  onChangeReligion (event) {
    console.log(event.target.value);
    this.createdBy = event.target.value;
    if (event.target.value == 7) {
      this.GetAllActiveUsers();
    } else {
      this.GetAllActiveUsers(
        this.isVerified,
        this.searchText,
        this.gender,
        event.target.value,
        this.religion,
        this.caste,
        this.motherTongue,
        this.country,
        this.locationState,
        this.location,
        this.date,
        this.selectedEndDate
      );
    }
  }
  onChangeCountry(event) {
    console.log(event.target.value);
    this.country = event.target.value;
    this.masterService.getStateData(event.target.value).subscribe(
      (result: any) => {
        console.log(result);
        this.stateList = result.data;

        this.GetAllActiveUsers(
          this.isVerified,
          this.searchText,
          this.gender,
          this.createdBy,
          this.religion,
          this.caste,
          this.motherTongue,
          this.countryList.filter((x) => x.id == event.target.value)[0].name,
          this.locationState,
          this.location,
          this.date,
          this.selectedEndDate
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onChangeState(event) {
    this.locationState = event.target.value;
    this.masterService.getCitiesData(event.target.value).subscribe(
      (result: any) => {
        console.log(result);
        this.cityList = result.data;
        this.GetAllActiveUsers(
          this.isVerified,
          this.searchText,
          this.gender,
          this.createdBy,
          this.religion,
          this.caste,
          this.motherTongue,
          this.countryList.filter((x) => x.id == this.country)[0].name,
          this.stateList.filter((x) => x.id == event.target.value)[0].name,
          this.location,
          this.date,
          this.selectedEndDate
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onChangeUserType(event){
    console.log(event.target.value)
    this.isVerified=event.target.value
    this.GetAllActiveUsers(
      event.target.value,
      this.searchText,
      this.gender,
      this.createdBy,
      this.religion,
      this.caste,
      this.motherTongue,
      this.country,
      this.locationState,
      this.location,
      this.date,
      this.selectedEndDate
    );
  }

  onChangeCity(event) {
    this.GetAllActiveUsers(
      this.isVerified,
      this.searchText,
      this.gender,
      this.createdBy,
      this.religion,
      this.caste,
      this.motherTongue,
      this.countryList.filter((x) => x.id == this.country)[0].name,
      this.stateList.filter((x) => x.id == this.locationState)[0].name,
      this.cityList.filter((x) => x.id == event.target.value)[0].name,
      this.date,
      this.selectedEndDate
    );
    
  }


}
