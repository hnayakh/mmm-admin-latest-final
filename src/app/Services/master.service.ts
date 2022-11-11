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
  getAllMasterData() {
    let url = environment.baseURL + environment.Master.GET_ALL_MASTER_DATA;
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers });
  }
  getAllCounties() {
    let url = environment.baseURL + environment.Master.GET_ALL_MASTER_COUNTRY;
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers });
  }
  getStateData(id) {
    let url = environment.baseURL + environment.Master.GET_ALL_MASTER_STATE+'/'+id;
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers });
  }
  getCitiesData(id) {
    let url = environment.baseURL + environment.Master.GET_ALL_MASTER_CITIES+'/'+id;
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
    let url =
      environment.baseURL +
      environment.Master.UPDATE_REFERRALS +
      "&" +
      "isActive=" +
      data.isActive;
    const headers = { "content-type": "application/json" };
    return this.http.post(url, data, { headers: headers });
  }
  getReferal() {
    let url = environment.baseURL + environment.Master.GET_ALL_REFERRALS;
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers });
  }
  getAllConnects() {
    let url = environment.baseURL + environment.Master.GET_ALL_CONNECTS;
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers });
  }
  getConnectById(data: any) {
    let url =
      environment.baseURL + environment.Master.GET_CONNECT_BY_ID + data.id;
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers });
  }
  updateAndCreateConnect(data: any) {
    let url = environment.baseURL + environment.Master.CREATE_AND_UPDATE_CONNET;
    const headers = { "content-type": "application/json" };
    return this.http.post(url, data, { headers: headers });
  }
getAllRequests() {
  let url = environment.baseURL + environment.Master.CONNECT_REQUEST;
  const headers = { "content-type": "application/json" };
  return this.http.get(url, { headers: headers });
}
  
}
