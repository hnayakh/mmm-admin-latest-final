import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment.dev";
@Injectable({
  providedIn: "root",
})
export class MasterService {
  constructor(private http: HttpClient) {}
  getAllCoupons() {
    let url = environment.baseURL + environment.Master.GET_ALL_COUPONS;
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers });
  }
  getAllCouponById(data: any) {
    let url = environment.baseURL + environment.Master.GET_ALL_COUPONS;
    const headers = { "content-type": "application/json" };
    return this.http.get(url + "/" + data, { headers: headers });
  }
  updateAndAddCoupon(data: any) {
    let url = environment.baseURL + environment.Master.ADD_AND_UPDATE_COUPONS;
    const headers = { "content-type": "application/json" };
    return this.http.post(url, data, { headers: headers });
  }
  updateAndCreateReferral(data: any) {
    let url = environment.baseURL + environment.Master.UPDATE_REFERRALS+'&'+"isActive="+data.isActive;
    const headers = { "content-type": "application/json" };
    return this.http.post(url, data, { headers: headers });
  }
  getReferal(){
    let url = environment.baseURL + environment.Master.GET_ALL_REFERRALS;
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers });
  }
  getAllConnects(){
    let url = environment.baseURL + environment.Master.GET_ALL_CONNECTS;
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers });
  }
  getConnectById(data:any){
    let url = environment.baseURL + environment.Master.GET_CONNECT_BY_ID+data.id;
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers });
  }
  updateAndCreateConnect(data:any){
    let url = environment.baseURL + environment.Master.CREATE_AND_UPDATE_CONNET;
    const headers = { "content-type": "application/json" };
    return this.http.post(url, data, { headers: headers });
  }
}
