import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as moment from "moment";
import { MasterService } from "../Services/master.service";
import { UserService } from "../Services/user.service";

@Component({
  selector: "app-user-request",
  templateUrl: "./user-request.component.html",
  styleUrls: ["./user-request.component.css"],
})
export class UserRequestComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  ActiveUserList: any;
  masterData: any;
  motherTongueList: any;
  religionList: any;
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
  isVerified = 1;
  recentSearchList = [];
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
  RequestList: any;
  userId: any;
  UserRequestStatus = ["Pending", "Accepted", "Rejected", "Reverted"];

  UserRequestState = [
    "Active",
    "RemovedByRequestingUser",
    "RemovedByRequestedUser",
    "NotConnected",
  ];

  constructor(
    private router: Router,
    private userService: UserService,
    private masterService: MasterService
  ) {}

  ngOnInit() {
    this.GetAllActiveUsers();
    this.getALlRequestData();
    this.getRececntSearchedList();
  }

  getALlRequestData() {
    this.masterService.getAllRequests().subscribe(
      (data: any) => {
        console.log("ghhgjh", data);
        this.RequestList = data.data;
        this.ActiveUserList= JSON.parse(JSON.stringify(this.RequestList))
      },
      (error) => {
        console.log(error);
      }
    );
  }
  GetAllActiveUsers(
    isVerified = 1,
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
  onChangeMotherTongue(event) {
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

  onClearClick() {
    this.isVerified = 1;
    this.searchText;
    this.gender = 3;
    this.createdBy = 7;
    this.religion = "";
    this.caste = "";
    this.motherTongue = "";
    this.country = "";
    this.locationState = "";
    this.location = "";
    this.date = "";
    this.selectedEndDate = "";
    this.GetAllActiveUsers();
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

  onFromDateChange(event) {
    console.log(event.target.value);
    this.date = moment(event.target.value).format("yyyy-MM-DD");
    this.GetAllActiveUsers(
      this.isVerified,
      this.searchText,
      this.gender,
      this.createdBy,
      this.religion,
      this.caste,
      this.motherTongue,
      this.country,
      this.locationState,
      this.location,
      moment(event.target.value).format("yyyy-MM-DD"),
      this.selectedEndDate
    );
  }
  onChangeToDate(event) {
    this.selectedEndDate = moment(event.target.value).format("yyyy-MM-DD");
    this.GetAllActiveUsers(
      this.isVerified,
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
      moment(event.target.value).format("yyyy-MM-DD")
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
  onSearch(event) {
    this.searchText = event.target.value;
    let storageData=localStorage.getItem("recentSearch");
    let allexistingSerachItems=storageData? JSON.parse(storageData):[] ;
    allexistingSerachItems.push(this.searchText);
    localStorage.setItem("recentSearch",JSON.stringify(allexistingSerachItems));
    this.GetAllActiveUsers(
      this.isVerified,
      event.target.value,
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
    this.getRececntSearchedList();
  }

  onChangeUserType(event) {
    console.log(event.target.value);
    this.isVerified = event.target.value;
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

  getRececntSearchedList() {
    let requiredSearched = JSON.parse(localStorage.getItem("recentSearch"));
    this.recentSearchList = requiredSearched;
    console.log("this.recentSearchList",this.recentSearchList);
    //.filter((x, i) => i < 12);
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

  userExists(arr, id) {
    return arr.some(function (el) {
      return el.id === id;
    });
  }
  onReligionChange(event) {
    this.religion = event.target.value;
    this.GetAllActiveUsers(
      this.isVerified,
      this.searchText,
      this.gender,
      this.createdBy,
      event.target.value,
      this.caste,
      this.motherTongue,
      this.country,
      this.locationState,
      this.location,
      this.date,
      this.selectedEndDate
    );
  }

  onNavigateRequestReceiver(event) {
    console.log("ghghghj", event);
    let recentSearched = JSON.parse(localStorage.getItem("recentSearch"));
    if (recentSearched) {
      console.log(this.userExists(recentSearched, event.receiverId));
      if (this.userExists(recentSearched, event.receiverId)) {
        this.router.navigate([`user-request/request/receiver/${event.receiverId}`]);
        this.getRececntSearchedList();
        return;
      }
      // let newSearched = [...recentSearched, event];
      // localStorage.setItem("recentSearch", JSON.stringify(newSearched));
    } else {
      // let latestSearched = [];
      // localStorage.setItem(
      //   "recentSearch",
      //   JSON.stringify([...latestSearched, event])
      // );
    }
    this.router.navigate([`user-request/request/receiver/${event.receiverId}`]);
    this.getRececntSearchedList();
  }
}
