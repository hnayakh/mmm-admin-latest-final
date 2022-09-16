import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment.dev";
@Injectable({
  providedIn: "root",
})
export class AdminService {
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
  GetAllAdminUsers() {
    let url = environment.baseURL + environment.Authentication.ADMIN_USERS;
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers });
  }
  CreateAdminUser(data:any){
    let url = environment.baseURL + environment.Authentication.ADMIN_USERS;
    const headers = { "content-type": "application/json" };
    return this.http.post(url,data, { headers: headers });
  }

  loggedIn() {
    return localStorage.getItem("token");
  }
}
