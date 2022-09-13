import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class ReportAndrevnueService {

  constructor(private http:HttpClient) { }
  getRevenue(Month,Year) {
    let data =
    {
      "parentPrcaticeId":localStorage.getItem('id'),
      "month":Month,
      "year":Year
    }
    let url = environment.baseURL + environment.RevenueAndReport.getRevenue
    const headers = { 'content-type': 'application/json' }
    return this.http.post(url, data, { 'headers': headers })
  }
}
