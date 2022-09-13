import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe = null;

  constructor(private http: HttpClient) { }
  GetVirtualAppointmentpending() {

    let data =
    {


      "parentPrcaticeId": localStorage.getItem('id'),
      "status": "pending",
      "scheduleType": "virtual"
    }
 
    let url = environment.baseURL + environment.Appointment.APPOINTMENTHISTORY
    const headers = { 'content-type': 'application/json' }
    return this.http.post(url, data, { 'headers': headers })
  }
  GetVirtualAppointmentconfirmed() {

    let data =
    {


      "parentPrcaticeId": localStorage.getItem('id'),
      "status": "accepted",
      "scheduleType": "virtual"
    }

    let url = environment.baseURL + environment.Appointment.APPOINTMENTHISTORY
    const headers = { 'content-type': 'application/json' }
    return this.http.post(url, data, { 'headers': headers })
  }
  GetVirtualAppointmentcompleted() {

    let data =
    {


      "parentPrcaticeId": localStorage.getItem('id'),
      "status": "complete",
      "scheduleType": "virtual"
    }

    let url = environment.baseURL + environment.Appointment.APPOINTMENTHISTORY
    const headers = { 'content-type': 'application/json' }
    return this.http.post(url, data, { 'headers': headers })
  }
  GetVirtualAppointmentslots() {

    let data =
    {


      "parentPrcaticeId": localStorage.getItem('id'),
      "status": "complete",
      "scheduleType": "virtual"
    }

    let url = environment.baseURL + environment.Appointment.GETSOLTS
    const headers = { 'content-type': 'application/json' }
    return this.http.post(url, data, { 'headers': headers })
  }
  GetVirtualAppointmentcancel() {

    let data =
    {


      "parentPrcaticeId": localStorage.getItem('id'),
      "status": "rejected",
      "scheduleType": "virtual"
    }

    let url = environment.baseURL + environment.Appointment.APPOINTMENTHISTORY
    const headers = { 'content-type': 'application/json' }
    return this.http.post(url, data, { 'headers': headers })
  }
  GetInpersonAppointmentpending() {

    let data =
    {


      "parentPrcaticeId": localStorage.getItem('id'),
      "scheduleType": "inperson",
      "status": "pending",
    }

    let url = environment.baseURL + environment.Appointment.APPOINTMENTHISTORY
    const headers = { 'content-type': 'application/json' }
    return this.http.post(url, data, { 'headers': headers })
  }
  GetInpersonAppointmentconfirmed() {

    let data =
    {


      "parentPrcaticeId": localStorage.getItem('id'),
      "scheduleType": "inperson",
      "status": "accepted",
    }

    let url = environment.baseURL + environment.Appointment.APPOINTMENTHISTORY
    const headers = { 'content-type': 'application/json' }
    return this.http.post(url, data, { 'headers': headers })
  }
  GetInpersonAppointmentcancel() {

    let data =
    {


      "parentPrcaticeId": localStorage.getItem('id'),
      "scheduleType": "inperson",
      "status": "rejected",
    }

    let url = environment.baseURL + environment.Appointment.APPOINTMENTHISTORY
    const headers = { 'content-type': 'application/json' }
    return this.http.post(url, data, { 'headers': headers })
  }
  GetInpersonAppointmentcomplete() {

    let data =
    {


      "parentPrcaticeId": localStorage.getItem('id'),
      "scheduleType": "inperson",
      "status": "complete",
    }

    let url = environment.baseURL + environment.Appointment.APPOINTMENTHISTORY
    const headers = { 'content-type': 'application/json' }
    return this.http.post(url, data, { 'headers': headers })
  }
  GetParentDepartment(){
    const today =this.todayWithPipe = this.pipe.transform(Date.now(), 'dd-MM-yyyy');
   let data =
   {
  
    "scheduleDate":today,
    "parentPrcaticeId": localStorage.getItem('id')
   }
 
   let url=environment.baseURL+environment.Appointment.GETPARENTMEDICALDEPARTMENTBYID
   const headers = { 'content-type': 'application/json'} 
    return this.http.post(url,data,{'headers':headers})
  }
  ChangeStatus(Status: any, ID: any) {
    let data =
      { "_id": ID, "appointmentStatus": Status }
    let url = environment.baseURL + environment.Appointment.StatusConfirmCancel
    const headers = { 'content-type': 'application/json' }
    return this.http.post(url, data, { 'headers': headers })
  }
  ChangeStatusPUT(Status: any, ID: any) {
    let data =
      { "_id": ID, "appointmentStatus": Status }
    let url = environment.baseURL + environment.Appointment.StatusConfirmCancel
    const headers = { 'content-type': 'application/json' }
    return this.http.post(url, data, { 'headers': headers })
  }
  getToken() {
    return localStorage.getItem('token')
  }
}
