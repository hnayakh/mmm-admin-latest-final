import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment.dev';


@Injectable({
  providedIn: 'root'
})
export class CmsService {
  getCreateFaqs() {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) { }
  getAllFaqs() {
    let url = environment.baseURL + environment.Cms.AllFaqs;
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers});
  }
  getAllSuccess() {
    let url = environment.baseURL + environment.Cms.ALL_SUCCESS;
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers});
  }
  CreateFaqs(data: any) {
   let url = environment.baseURL + environment.Cms.CREATE_FAQ;
   const headers = { "content-type": "application/json"};
   return this.http.post(url , data, { headers: headers});
  }
  CreateSuccess(data: any) {
   let url = environment.baseURL + environment.Cms.CREATE_SUCCESS;
   const headers = { "content-type": "application/json"};
   return this.http.post(url , data, { headers: headers});
  }
  updateAndAddFaqs(data: any) {
    let url = environment.baseURL + environment.Cms.CREATE_FAQ;
    const headers = { "content-type": "application/json" };
    return this.http.post(url, data, { headers: headers });
  }

}
