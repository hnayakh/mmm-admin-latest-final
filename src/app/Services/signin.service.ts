import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment.dev";
@Injectable({
  providedIn: "root",
})
export class SigninService {
  constructor(private http: HttpClient) {}
  SignIn(id: any) {
    let data = {
      email: id.email,
      password: id.password,
    };
    let url = environment.baseURL + environment.Authentication.ADMIN_LOGIN;
    const headers = { "content-type": "application/json" };
    return this.http.post(url, data, { headers: headers });
  }

  changePassword(id: any) {
    let data = {
      id: localStorage.getItem("id"),
      oldPassword: id.oldPassword,
      newPassword: id.newPassword,
      confirmPassword: id.confirmPassword,
    };
    let viewurl =
      environment.baseURL + environment.Authentication.CHANGEPASSWORD;
    return this.http.put(viewurl, data);
  }
  createSecurityPin(securitypin) {
    let data = {
      id: localStorage.getItem("id"),
      profilePin: securitypin,
    };
    let view_url =
      environment.baseURL + environment.Authentication.CREATESECURITYPIN;
    return this.http.post(view_url, data);
  }
  varifySecurityPin(securitypin) {
    let data = {
      id: localStorage.getItem("id"),
      profilePin: securitypin,
    };
    let view_url =
      environment.baseURL +
      environment.Authentication.PROFILESECURITYVARIFICATION;
    return this.http.post(view_url, data);
  }
  checkSecurityPin() {
    let data = {
      id: localStorage.getItem("id"),
    };
    let view_url =
      environment.baseURL + environment.Authentication.CHECKPROFILEPIN;
    return this.http.post(view_url, data);
  }
  updateSecurityPlan(id: any) {
    let data = {
      id: localStorage.getItem("id"),
      oldPin: id.oldPin,
      newPin: id.newPin,
      confirmPin: id.confirmPin,
    };
    let view_url =
      environment.baseURL + environment.Authentication.UPDATESECURITYPLANE;
    return this.http.put(view_url, data);
  }
  forgetPassword(email) {
    let data = {
      email: email,
    };
    let view_url =
      environment.baseURL + environment.Authentication.FORGOTPASSWORD;
    return this.http.post(view_url, data);
  }
  loggedIn() {
    return localStorage.getItem("token");
  }
}
