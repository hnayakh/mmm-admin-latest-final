import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment.dev";
@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}
  GetAllPendingUsers() {
    let url = environment.baseURL + environment.User.AllVerifiedUser;
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers });
  }
  GetActiveUSers(
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
      `users/admin/appUsers?isVerified=1${
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

  loggedIn() {
    return localStorage.getItem("token");
  }
}
