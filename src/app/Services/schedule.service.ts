import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { AmdDependency } from 'typescript';



@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
 
  constructor(private http:HttpClient) { }
  GenerateVirtualSchedule(id:any){
    console.log("data from add vschedule",id )
    let data=
  {
    "startTime":id.startTime,
     "endTime":id.endTime, 
     "slotMinutes":parseInt(id.slotMinutes) 
       }
      let url=environment.baseURL+environment.Schedule.GENVIRTUALSCHEDULE
      const headers = {'content-type':'application/json'}
      return this.http.post(url,data,{'headers':headers})
  }
  CreatSchedule(id:any, slot:any,Settime:any,EndTime,sloMin:any){
    let data ={
      "parentMedicalId": localStorage.getItem('id'),
      "physicianId":id.physicianId,
        // "availableDays":sechedule,
      "availableDays": [
          {
              "dayName": id.dayName,
              "startTime":Settime,
              "fee": id.fees,
              "endTime":EndTime,
              // "startTime": id.startTime,
              // "endTime": id.endTime,
              "slots" : slot,
              // "slots": [
              //     {
              //         "slot": [
              //             "10:00",
              //             "10:30"
              //         ],
              //         "isActive": true
              //     },
              //     {
              //         "slot": [
              //             "10:30",
              //             "11:00"
              //         ],
              //         "isActive": true
              //     }
              // ],
              "isAvailable": "yes"
          }
      ],
      "repeatDaily": id.repeatDaily,
      "scheduleType": "virtual",
      // "slotMinutes": 30
      "slotMinutes":sloMin
    
    }
    let url=environment.baseURL+environment.Schedule.CREARSCHEDULE
    const headers = {'content-type':'application/json' }
    return this.http.post(url,data,{'headers':headers})
      }
      CreatInpersonSchedule(id:any, slot:any,Settime:any,EndTime,sloMin:any){
        let data ={
          "parentMedicalId": localStorage.getItem('id'),
          "physicianId":id.physicianId,
            // "availableDays":sechedule,
          "availableDays": [
              {
                  "dayName": id.dayName,
                  "startTime":Settime,
                  "fee":id.fees,
                  "endTime":EndTime,
                  // "startTime": id.startTime,
                  // "endTime": id.endTime,
                  "slots" : slot,
                  // "slots": [
                  //     {
                  //         "slot": [
                  //             "10:00",
                  //             "10:30"
                  //         ],
                  //         "isActive": true
                  //     },
                  //     {
                  //         "slot": [
                  //             "10:30",
                  //             "11:00"
                  //         ],
                  //         "isActive": true
                  //     }
                  // ],
                  "isAvailable": "yes"
              }
          ],
          "repeatDaily": id.repeatDaily,
          "scheduleType": "inperson",
          // "slotMinutes": 30
          "slotMinutes":sloMin
        
        }
        let url=environment.baseURL+environment.Schedule.CREARSCHEDULE
        const headers = {'content-type':'application/json' }
        return this.http.post(url,data,{'headers':headers})
          }
      getAllScheduleVirtualList(){
        let data={
          
            "scheduleType":"virtual",
            "parentMedicalId": localStorage.getItem('id')
            }
        let url =environment.baseURL+environment.Schedule.GETALLSCHEDULED
         const headers = { 'content-type': 'application/json'} 
        return this.http.post(url,data,{'headers':headers})
      }
      getAllScheduleVirtualSolts(day,id){
        let data={
            "day":day,
            "scheduleType":"virtual",
            "physicianId": id
            }
            console.log(id,day)
            console.log(data)
        let url =environment.baseURL+environment.Schedule.GETSOLTS
         const headers = { 'content-type': 'application/json'} 
        return this.http.post(url,data,{'headers':headers})
      }
      getAllScheduleInpersonSolts(day,id){
        let data={
            "day":day,
            "scheduleType":"inperson",
            "physicianId": id
            }
            console.log(id,day)
            console.log(data)
        let url =environment.baseURL+environment.Schedule.GETSOLTS
         const headers = { 'content-type': 'application/json'} 
        return this.http.post(url,data,{'headers':headers})
      }
  UpdateVirtualSchedule(id:any,virtualId:any)
  {
    console.log("Data from updatev",id)
   
    let data={
      "isAlreadyBooked": false,
    
      "_id": virtualId,
      "parentMedicalId": localStorage.getItem('id'),
      "bookingType": 0,
      "physicianNmae":id.physicianNmae.fName,
      "physicianId": id.physicianNmae._id,
      "roomNo": id.roomNo,
      "department": id.department.deptName,
      "departmentId":id.department._id,
      "scheduleDate": id.scheduleDate,
      "startTime":id.startTime,
      "endTime": id.endTime,
      "message": id.message,
      "scheduleStatus": id.scheduleStatus,
      "createdOn":id.createdOn,
      "updated": id.updated,
      "slotInString": id.slotInString,
      "__v": 0
  }
      let url=environment.baseURL+environment.Schedule.EDITVIRTUALSCHEDULE
      const headers = {'content-type':'application/json'}
      return this.http.post(url,data,{'headers':headers})
  }
//   getScheduleByid(id:any){
//     let url=environment.baseURL+environment.Schedule.GETSCHEDULEBYID
//     const headers = {'content-type':'application/json'}
// return this.http.post(url,id,{'headers':headers})
//   }
  // AddInpersonSechdeule(id:any){
  //   let data=
  //   {  
  //     "parentMedicalId": localStorage.getItem('id'),
  //     "bookingType":1,
  //         "physicianNmae":id.physicianNmae.fName,
  //         "physicianId": id.physicianNmae.userId,
  //         "roomNo": id.roomNo,
  //         "department": id.department.deptName,
  //         "departmentId":id.department._id,
  //         "scheduleDate":id.scheduleDate,
  //         "startTime":id.startTime,
  //         "endTime":id.endTime,
  //         "message":id.message,
  //         "scheduleStatus":id.scheduleStatus
  //     }
  //     let url=environment.baseURL+environment.Schedule.GENVIRTUALSCHEDULE
  //     const headers = {'content-type':'application/json'}
  //     return this.http.post(url,data,{'headers':headers})
  // }

getScheduleById(id:any){
  console.log("check",id)
  return this.http.post(`${environment.baseURL}privatepractice/getSceduleById`,{id:id})
}
// updateInpersonSchedule(data:any,scheduleId:any){
//   console.log("update in person",data)
//   let scheduledata=
//   {  
//     "parentMedicalId": localStorage.getItem('id'),
//     "_id":scheduleId,

//         "physicianNmae":data.physicianNmae.fName,
//         "physicianId": data.physicianNmae.userId,
//         "roomNo": data.roomNo,
//         "department": data.department.deptName,
//         "departmentId":data.department._id,
//         "scheduleDate":data.scheduleDate,
//         "startTime":data.startTime,
//         "endTime":data.endTime,
//         "message":data.message,
//         "scheduleStatus":data.scheduleStatus
//     }

//   return this.http.post(`${environment.baseURL}privatepractice/editSchedule`,scheduledata)
// }
  getAllinpersonScheduleList(){
    let data={
      
      "scheduleType":"inperson",
      "parentMedicalId": localStorage.getItem('id')
        }
    let url =environment.baseURL+environment.Schedule.GETALLSCHEDULED
     const headers = { 'content-type': 'application/json'} 
    return this.http.post(url,data,{'headers':headers})
  }


  getToken() {
    return localStorage.getItem('token')
  }
}
