import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {

  constructor(private http:HttpClient) { }
  GetAllClaims() {
    let id = localStorage.getItem('id')
    let view_url = environment.baseURL + environment.Claims.GetAlllClaims + '/' + id
    return this.http.get(view_url)
  }
  GetPendingClaims() {
    let id = localStorage.getItem('id')
    let view_url = environment.baseURL + environment.Claims.GetPendingClaims + '/' + id + '/' + 1
    return this.http.get(view_url)
  }
  GetPaidClaims() {
    let id = localStorage.getItem('id')
    let view_url = environment.baseURL + environment.Claims.GetPaidClaims + '/' + id + '/' + 1
    return this.http.get(view_url)
  }
  GetRejectedClaims() {
    let id = localStorage.getItem('id')
    let view_url = environment.baseURL + environment.Claims.GetRejectClaims + '/' + id + '/' +'rejected'
    return this.http.get(view_url)
  }
  GetAcceptedClaims() {
    let id = localStorage.getItem('id')
    let view_url = environment.baseURL + environment.Claims.GetRejectClaims + '/' + id + '/' +'accepted'
    return this.http.get(view_url)
  }
}
