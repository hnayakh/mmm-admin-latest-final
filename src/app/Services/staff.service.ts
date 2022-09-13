import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) { }
  AddNurse(id: any, imageUrl: any) {

    console.log("data from create physician", id)
    let data =
    {
      "parentPrcaticeId": localStorage.getItem('id'),
      "role": "nurse",
      "firstName": id.firstName,
      "lastName": id.lastName,
      "gender": id.gender,
      "dob":id.dob,
      "joinDate":id.joinDate,
      "mobileNo": id.mobileNo,
      "parentType": 1,
      "totalExp": id.totalExp,
      "previoushospital": id.previoushospital,
      "about":id.about,
      "email": id.email,
      "profileImg": imageUrl,
      "status":id.status,
      "educationInformation":[{
        "Institution":id.Institution,
        "department":id.edudepartment,
        "startDate":id.startDate,
        "endDate":id.endDate, 
        "degree":id.degree,
         "imageurl": ""
    }],"experienceInformation":[{
        // "exphospitalname":id.exphospitalname,
         "departmentName":id.expdepartment,
         "position":id.postitin,
         "startDate":id.startDateex,
        "endDate":id.endDateex, 
        "imageurl": ""
    }], 
      "address": {
          "city": id.city,
          "state": id.state,
          "country":id.country,
          "postalcode":id.postalcode,
          "addressinfo": id.city+','+id.stat+','+id.country
      }
  }
    var t = this.getToken();
    let url = environment.baseURL + environment.Staff.ADDSTAFF
    const headers = { 'content-type': 'application/json', 'Authorization': "Bearer " + t }
    return this.http.post(url, data, { 'headers': headers })
  }
  AddStaff(id: any, imageUrl: any) {

    console.log("data from create physician", id)
    let data =
    {
      "parentPrcaticeId": localStorage.getItem('id'),
      "role": "others",
      "firstName": id.firstName,
      "lastName": id.lastName,
      "gender": id.gender,
      "dob":id.dob,
      "joinDate":id.joinDate,
      "mobileNo": id.mobileNo,
      "parentType": 1,
      "totalExp": id.totalExp,
      "previoushospital": id.previoushospital,
      "about":id.about,
      "email": id.email,
      "profileImg": imageUrl,
      "status":id.status,
      "educationInformation":[{
        "Institution":id.Institution,
        "department":id.edudepartment,
        "startDate":id.startDate,
        "endDate":id.endDate, 
        "degree":id.degree,
         "imageurl": ""
    }],"experienceInformation":[{
        // "exphospitalname":id.exphospitalname,
         "departmentName":id.expdepartment,
         "position":id.postitin,
         "startDate":id.startDateex,
        "endDate":id.endDateex, 
        "imageurl": ""
    }], 
      "address": {
          "city": id.city,
          "state": id.state,
          "country":id.country,
          "postalcode":id.postalcode,
          "addressinfo": id.city+','+id.stat+','+id.country
      }
  }
    var t = this.getToken();
    let url = environment.baseURL + environment.Staff.ADDSTAFF
    const headers = { 'content-type': 'application/json', 'Authorization': "Bearer " + t }
    return this.http.post(url, data, { 'headers': headers })
  }
  GetStaff(id){
  let viewurl=environment.baseURL+environment.Staff.GETSTAFF+'/'+id+'/'+'nurse'
  return this.http.get(viewurl)
  }
  GetOthersStaff(id){
    let viewurl=environment.baseURL+environment.Staff.GETSTAFF+'/'+id+'/'+'others'
    return this.http.get(viewurl)
    }
  GetStaffByID(id){
let viewurl=environment.baseURL+environment.Staff.GETSTAFFBYID+'/'+id
return this.http.get(viewurl)
  }
  GetTemrs(){
    let viewurl=environment.baseURL+environment.Staff.GETTERMS
    return this.http.get(viewurl)
      }
      GetFAQS(){
        let viewurl=environment.baseURL+environment.Staff.FAQS
        return this.http.get(viewurl)
          }
          GetPrivicy(){
            let viewurl=environment.baseURL+environment.Staff.PRIVICY
            return this.http.get(viewurl)
              }
  getToken() {
    return localStorage.getItem('token')
  }
  EditNurseDetails(id: any, imageUrl: any,Staffid:any){
    let data =
    {
      "parentPrcaticeId": localStorage.getItem('id'),
      "id": Staffid,
      "role": "nurse",
      "firstName": id.firstName,
      "lastName": id.lastName,
      "gender": id.gender,
      "dob":id.dob,
      "joinDate":id.joinDate,
      "mobileNo": id.mobileNo,
      "parentType": 1,
      "totalExp": id.totalExp,
      "previoushospital": id.previoushospital,
      "about":id.about,
      "email": id.email,
      "profileImg": imageUrl,
      "status":id.status,
      "educationInformation":[{
        "Institution":id.Institution,
        "department":id.edudepartment,
        "startDate":id.startDate,
        "endDate":id.endDate, 
        "degree":id.degree,
         "imageurl": ""
    }],"experienceInformation":[{
        // "exphospitalname":id.exphospitalname,
         "departmentName":id.expdepartment,
         "position":id.postitin,
         "startDate":id.startDateex,
        "endDate":id.endDateex, 
        "imageurl": ""
    }],  
      "address": {
          "city": id.city,
          "state": id.state,
          "country":id.country,
          "postalcode":id.postalcode,
          "addressinfo": id.city+','+id.stat+','+id.country
      }
  }
  var t = this.getToken();
  let url = environment.baseURL + environment.Staff.EDITSTAFF
  const headers = { 'content-type': 'application/json', 'Authorization': "Bearer " + t }
  return this.http.put(url, data, { 'headers': headers })
  }
  EditStaffDetails(id: any, imageUrl: any,Staffid:any){
    let data =
    {
      "parentPrcaticeId": localStorage.getItem('id'),
      "id": Staffid,
      "role": "others",
      "firstName": id.firstName,
      "lastName": id.lastName,
      "gender": id.gender,
      "dob":id.dob,
      "joinDate":id.joinDate,
      "mobileNo": id.mobileNo,
      "parentType": 1,
      "totalExp": id.totalExp,
      "previoushospital": id.previoushospital,
      "about":id.about,
      "email": id.email,
      "profileImg": imageUrl,
      "status":id.status,
      "educationInformation":[{
        "Institution":id.Institution,
        "department":id.edudepartment,
        "startDate":id.startDate,
        "endDate":id.endDate, 
        "degree":id.degree,
         "imageurl": ""
    }],"experienceInformation":[{
        // "exphospitalname":id.exphospitalname,
         "departmentName":id.expdepartment,
         "position":id.postitin,
         "startDate":id.startDateex,
        "endDate":id.endDateex, 
        "imageurl": ""
    }], 
      "address": {
          "city": id.city,
          "state": id.state,
          "country":id.country,
          "postalcode":id.postalcode,
          "addressinfo": id.city+','+id.stat+','+id.country
      }
  }
  var t = this.getToken();
  let url = environment.baseURL + environment.Staff.EDITSTAFF
  const headers = { 'content-type': 'application/json', 'Authorization': "Bearer " + t }
  return this.http.put(url, data, { 'headers': headers })
  }
}
