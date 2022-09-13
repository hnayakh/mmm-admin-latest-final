import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class PharmacyServiceService {

  constructor(private http:HttpClient) { }
  Getpharmacy(){
    debugger
    let view_url = environment.baseURL + environment.Pharmacy.getPharmacyList
    return this.http.get(view_url)
  }
  getPrescriptionById(Id){
    
    let view_url = environment.baseURL + environment.Pharmacy.getPrescriptionById+'/'+Id
    return this.http.get(view_url)
  } 
  
}
