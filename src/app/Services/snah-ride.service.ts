import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class SnahRideService {

  constructor(private http:HttpClient) { }
  GetRideLis(length){
    debugger
    let view_url = environment.baseURL + environment.Snah_Ride.SnahRideList+'/'+'?count='+length+'&page=1'
    return this.http.get(view_url)
  }
  GetRideDetailsById(mobile,loginUserId){
    let data =
    {
      "mobile":mobile,
      "loginUserId":loginUserId
      }
      let view_url=environment.baseURL+environment.Snah_Ride.SnahRideProfile
      return this.http.post(view_url,data)
  }
 /*..................Help&&Support.........................*/
 Addticket(data) {
  return this.http.post('https://immense-brook-06350.herokuapp.com/api/public/addTicket', data).pipe(map((res) => {
    return res
  }))

}
GetAllTicket() {
 let id= localStorage.getItem('id')
  return this.http.get('https://immense-brook-06350.herokuapp.com/api/public/getAllTicketsByParent'+'/'+id+'/'+1)
  .pipe(map((res) => {
    return res
  }))

}
GetTickeTbyId(id) {
  return this.http.get('https://immense-brook-06350.herokuapp.com/api/public/getTicketById' + '/' + id).pipe(map((res) => {
    return res
  }))
}
UpdateTicket(data) {

  return this.http.put('https://immense-brook-06350.herokuapp.com/api/public/ticketUpdate', data).pipe(map((res) => {
    return res
  }))
}




}
