import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment.dev";

@Injectable({
  providedIn: "root",
})
export class CmsService {
  getCreateFaqs() {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) {}
  getAllFaqs() {
    let url = environment.baseURL + environment.Cms.AllFaqs;
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers });
  }
  getAllSuccess() {
    let url = environment.baseURL + environment.Cms.ALL_SUCCESS;
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers });
  }
  getAllcontent() {
    let url = environment.baseURL + environment.Cms.ALL_CONTENT;
    const headers = { "content-type": "application/json" };
    return this.http.get(url, { headers: headers });
  }
  CreateFaqs(data: any, type: any) {
    if (type === "update") {
      let url = environment.baseURL + environment.Cms.CREATE_FAQ;
      const headers = { "content-type": "application/json" };
      return this.http.put(url, data, { headers: headers });
    } else {
      let url = environment.baseURL + environment.Cms.CREATE_FAQ;
      const headers = { "content-type": "application/json" };
      return this.http.post(url, data, { headers: headers });
    }
  }
  CreateSuccess(data: any, type: any) {
    if (type === "update") {
      let url = environment.baseURL + environment.Cms.CREATE_SUCCESS;
      const headers = { "content-type": "application/json" };
      return this.http.put(url, data, { headers: headers });
    } else {
    let url = environment.baseURL + environment.Cms.CREATE_SUCCESS;
    const headers = { "content-type": "application/json" };
    return this.http.post(url, data, { headers: headers });
    }
  }
  CreateContent(data: any, type: any) {
    if (type === "update") {
      let url = environment.baseURL + environment.Cms.CREATE_CONTENT;
      const headers = { "content-type": "application/json" };
      return this.http.put(url, data, { headers: headers });
    } else {
    let url = environment.baseURL + environment.Cms.CREATE_CONTENT;
    const headers = { "content-type": "application/json" };
    return this.http.post(url, data, { headers: headers });
   }
  }
  updateAndAddFaqs(data: any, type: any) {
    console.log(type);
    if (type.type === "update") {
      let url = environment.baseURL + environment.Cms.CREATE_FAQ;
      const headers = { "content-type": "application/json" };
      return this.http.put(url, data, { headers: headers });
    } else {
      let url = environment.baseURL + environment.Cms.CREATE_FAQ;
      const headers = { "content-type": "application/json" };
      return this.http.post(url, data, { headers: headers });
    }
  }
  delete(id) {
    let url = environment.baseURL + environment.Cms.DELETE_FAQ + "/" + id;
    return this.http.delete(url, id);
  }
  deletecontent(id) {
    let url = environment.baseURL + environment.Cms.DELETE_CONTENT + "/" + id;
    return this.http.delete(url, id);
  }
  deleteSuccess(id) {
    let url = environment.baseURL + environment.Cms.DELETE_SUCCESS + "/" + id;
    return this.http.delete(url, id);
  }
  updateAndAddSuccess(data: any, type: any) {
    console.log(type);
    if (type === "update") {
      let url = environment.baseURL + environment.Cms.CREATE_SUCCESS;
      const headers = { "content-type": "application/json" };
      return this.http.put(url, data, { headers: headers });
    } else {
      let url = environment.baseURL + environment.Cms.CREATE_SUCCESS;
      const headers = { "content-type": "application/json" };
      return this.http.post(url, data, { headers: headers });
    }
  }
  updateAndAddcontent(data: any, type: any) {
    console.log(type);
    if (type === "update") {
      let url = environment.baseURL + environment.Cms.CREATE_CONTENT;
      const headers = { "content-type": "application/json" };
      return this.http.put(url, data, { headers: headers });
    } else {
      let url = environment.baseURL + environment.Cms.CREATE_CONTENT;
      const headers = { "content-type": "application/json" };
      return this.http.post(url, data, { headers: headers });
    }
  }
}
