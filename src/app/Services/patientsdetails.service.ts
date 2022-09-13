import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class PatientsdetailsService {

  constructor(private http:HttpClient) { }
  GetPatientsHistory(){
    var body={
      "parentPrcaticeId":localStorage.getItem('id')
    }
    let view_url=environment.baseURL+environment.Patients.PATIENTSLIST
    const headers={'content-type':'application/json','Authorization':'Bearer'}
    return this.http.post(view_url,body,{ 'headers': headers })
  }
  GetPatientsHistory2(){
   
    let view_url=environment.baseURL+environment.Patients.PATIENTSLIST2
    return this.http.get(view_url)
  }
  GetPatientDetailsbYId(id){
    
    let view_url=environment.baseURL+environment.Patients.PatientDetailsById+'/'+id
    const headers={'content-type':'application/json','Authorization':'Bearer'}
    return this.http.get(view_url,{'headers':headers})
  }
  PhysicianActivityOnMemberChart(id){
    let view_url=environment.baseURL+environment.Patients.GetPhysicianVisysDetailsByPatientsId+'/'+id
    return this.http.get(view_url)
  }
  InsuranceVisitDetails(id){
    let view_url=environment.baseURL+environment.Patients.GetInsuranceVisitByPatientId+'/'+id
    return this.http.get(view_url)
  }
  medicalvisitByPatientId(id){
    let view_url=environment.baseURL+environment.Patients.GetMedicalAppointmentbyPatientId+'/'+id
    return this.http.get(view_url)
  }
  privatePracticeByPatientId(id){
    let view_url=environment.baseURL+environment.Patients.GetPrivatePracticeAppointmentbyPatientId+'/'+id
    return this.http.get(view_url)
  }
  GetActivityByPatient(id){
    let view_url=environment.baseURL+environment.Patients.GetActivity+'/'+id
    return this.http.get(view_url)
  }
  GetCaregiverBookingHistory(Id){
    let data =
    {"patientId": Id, "bookingTypeName": "CAREGIVER"}
    let view_url=environment.baseURL+environment.Patients.GetCaregiverVisits
    return this.http.post(view_url,data)
  
  }
  GetRecentPatients(){
    const headers = {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' 
    }
    let id=localStorage.getItem('id')
    let vew_url=environment.baseURL+environment.Patients.RecentPatients+'/'+id+'/'+1
    return this.http.get(vew_url,{ 'headers': headers })
  }
  getToken() {
    return localStorage.getItem('token')
  }
}
