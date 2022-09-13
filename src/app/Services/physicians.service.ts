import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class PhysiciansService {

  constructor(private http: HttpClient) {

  }
  getALlDoctorByMedical(id) {


    var t = this.getToken();
    const headers = { 'content-type': 'application/json', 'Authorization': "Bearer " + t }
    let viewurl = environment.baseURL + environment.Physician.GETALLDOCTORSBYMEDICAL + "/" + id
    return this.http.get(viewurl, { 'headers': headers })
  }
  CreatPhyisician(id: any, imageUrl: any) {

    console.log("data from create physician", id)
    let data =
    // {
    //   "parentPrcaticeId": localStorage.getItem('id'),
    //   "medicalDepartment": id.medicalDepartment._id,
    //   "email": id.email,
    //   "fName": id.fName,
    //   "lName": id.lName,
    //   "profileImage": imageUrl,
    //   "userType": 3,
    //   "userrole": 3,
    //   "phone": id.phone,
    //   "totalExperienceInYr": id.totalExperienceInYr,
    //   "parentType": 1,
    //   "position": id.position,
    //   "licenceNo": id.licenceNo,
    //   "speciality": id.specility,
    //   "gender": id.gender,
    //   "dob": id.dob,
    //   "maritalStatus": id.maritalstatus,
    //   "age": id.age,
    //   // "country": id.country,
    //   // "state": id.state,
    //   // "postalCode": id.postalcode,
    //   // "city": id.city,
    //   "biography": id.biography,
    //   // "educationInformation":edinfo,
    //   "educationInformation": [{
    //     "Institution": id.Institution,
    //     "department": id.department,
    //     "startDate": id.joiningdate,
    //     "endDate": id.endingdate,
    //     "degree": id.degree,
    //     "imageurl": "",

    //   }],
    //   // "experienceInformation": expinfo,
    //   "experienceInformation": [{
    //     "department": id.department2,
    //     "postitin": id.Edposition,
    //     "startDate": id.joiningdate2,
    //     "endDate": id.endingdate2,
    //     "imageurl": "",
    //   }],
    //   "physicianStatus": id.physicianStatus,
    //   // "addressinfo": id.city+"," + id.state+"," + id.country+"," + id.postalcode,
    //   // "address":  id.city+"," + id.state+"," + id.country+"," + id.postalcode
    //   "address": {
    //     "city": id.city,
    //     "state": id.state,
    //     "country": id.country,
    //     "postalcode": id.postalcode,
    //     "addressinfo": id.city + "," + id.state + "," + id.country + "," + id.postalcode,

    //   },

    // }
    {
      "parentPrcaticeId": localStorage.getItem('id'),
      "email": id.email,
      "fName": id.fName,
      "lName": id.lName,
      "medicalDepartment": id.medicalDepartment._id,
      "totalExperienceInYr": id.totalExperienceInYr,
      "profileImage": imageUrl,
      "userType": 3,
      "userrole": 3,
      "location": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      },
      "phone": id.phone,
      "parentType": 1,
      "position": id.position,
      "licenceNo": id.licenceNo,
      "speciality": id.specility,
      "biography": id.biography,
      "gender": id.gender,
      "dob": id.dob,
      "maritalStatus": id.maritalstatus,
      "age": id.age,
      "physicianStatus": "",
      "educationInformation": [
        {
          "Institution": id.Institution,
          "department": id.department,
          "startDate": id.joiningdate,
          "endDate": id.endingdate,
          "degree": id.degree,
          "imageurl": ""
        }
      ],
      "experienceInformation": [
        {
          "department": id.department2,
          "postitin": id.Edposition,
          "startDate": id.joiningdate2,
          "endDate": id.endingdate2,
          "imageurl": ""
        }
      ],
      "address": {
        "city": id.city,
        "state": id.state,
        "country": id.country,
        "postalcode": id.postalcode,
        "addressinfo": id.city + "," + id.state + "," + id.country + "," + id.postalcode
      }
    }
    var t = this.getToken();
    let url = environment.baseURL + environment.Physician.CREATPHYSICIAN
    const headers = { 'content-type': 'application/json', 'Authorization': "Bearer " + t }
    return this.http.post(url, data, { 'headers': headers })
  }
  deletePhysicianDepartmentById(id) {


    let url = environment.baseURL + environment.Physician.DELETEPHYSICIANBYID + "/" + id

    return this.http.delete(url)
  }
  getPhysicianlist(id) {
    let url = environment.baseURL + environment.Physician.GETPHYSICIANBYID + "/" + id
    return this.http.get(url)

  }
  getInvoice() {
    let url = environment.baseURL + environment.Physician.GETINVOICE + "/62220d89ceb6af0016922e5c/1"
    return this.http.get(url)

  }
  getInvoicedata() {
    let url = environment.baseURL + environment.Physician.GETINVOICEDATA + "/62220d89ceb6af0016922e5c"
    return this.http.get(url)

  }
  postInvoice(data) {
    var t = this.getToken();
    const headers = { 'content-type': 'application/json', 'Authorization': "Bearer " + t }
    let url = environment.baseURL + environment.Physician.POSTINVOICE

    return this.http.post(url, data, { 'headers': headers })



  }
  updatePhysicianDepartmentById(id: any, imageUrl: any, physcianId: any) {

    console.log("data from update phisician", id)

    let data =
    {
      "parentPrcaticeId": localStorage.getItem('id'),
      "_id": physcianId,
      "email": id.email,
      "fName": id.fName
      , "lName": id.lName,
      "profileImage": imageUrl,
      "userType": 3,
      "userrole": 3,
      "phone": id.phone,
      "totalExperienceInYr": id.totalExperienceInYr,
      "parentType": 1,
      "position": id.position,
      "licenceNo": id.licenceNo,
      "speciality": id.specility,
      "gender": id.gender,
      "dob": id.dob,
      "maritalStatus": id.maritalstatus,
      "age": id.age,

      "biography": id.biography,

      "educationInformation": [{
        "Institution": id.Institution,
        "department": id.department,
        "startDate": id.joiningdate,
        "endDate": id.endingdate,
        "degree": id.degree,
        "imageurl": "",

      }],
      // "experienceInformation": expinfo,
      "experienceInformation": [{
        "department": id.department2,
        "postitin": id.Edposition,
        "startDate": id.joiningdate2,
        "endDate": id.endingdate2,

        "imageurl": "",
      }],
      "physicianStatus": id.physicianStatus,
      "address": {
        "city": id.city,
        "state": id.state,
        "country": id.country,
        "postalcode": id.postalcode,
        "addressinfo": id.city + "," + id.state + "," + id.country + "," + id.postalcode,

      },
    }




    console.log("data affter set", data)
    var t = this.getToken();
    const headers = { 'content-type': 'application/json', 'Authorization': "Bearer " + t }
    let url = environment.baseURL + environment.Physician.UPDATEPHYSICIANYID;

    return this.http.post(url, data, { 'headers': headers })
  }
  getToken() {
    return localStorage.getItem('token')
  }

}
