import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment.dev";
@Injectable({
  providedIn: "root",
})
export class UserService {
  getConnectHistory(id: any) {
    throw new Error("Method not implemented.");
  }
  constructor(private http: HttpClient) {}
  GetAllPendingUsers() {
    let url = environment.baseURL + environment.User.AllVerifiedUser;
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers });
  }
  getAllUsersAdmin() {
    console.log("Api called");
    let url = environment.baseURL + environment.User.AllActiveUsers;
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers });
  }
  GetActiveUSers(
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
    var url =
      environment.baseURL +
      `users/admin/appUsers?isVerified=${isVerified}${
        searchText.length > 0 ? `&displayId=${searchText}` : ""
      }${gender !== 3 ? `&gender=${gender}` : ""}
  ${location.length > 0 ? `&location=${location}` : ""}${
        createdFor !== 7 ? `&relationship=${createdFor}` : ""
      }
  ${religion.length > 0 ? `&religion=${religion}` : ""}${
        caste.length > 0 ? `&cast=${caste}` : ""
      }${motherTongue.length > 0 ? `&motherTongue=${motherTongue}` : ""}
  ${country.length > 0 ? `&country=${country}` : ""}${
        state.length > 0 ? `&state=${state}` : ""
      }${createdFrom.length > 0 ? `&startDate=${createdFrom}` : ""}${
        createdTo.length > 0 ? `&endDate=${createdTo}` : ""
      }`
        .replace("%20 ", "")
        .replace("\n", "");
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers });
  }
  GetUserProfile(id: any) {
    let url = environment.baseURL + "users/basic/" + id;
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers });
  }
  VerifyUser(id: any) {
    let url = environment.baseURL + "users/admin/verify/" + id;
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers });
  }
  RejectUser(id: any) {
    let url = environment.baseURL + "users/admin/rejct/" + id;
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers });
  }
  getRechargeHistory(id: any) {
    let url;
    if (id) {
      url = environment.baseURL + "connects/recharge/" + id;
    } else {
      url = environment.baseURL + "connects/recharge";
    }

    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers });
  }

  loggedIn() {
    return localStorage.getItem("token");
  }
}
