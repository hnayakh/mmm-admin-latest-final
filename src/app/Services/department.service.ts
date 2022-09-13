import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  [x: string]: any;

  constructor(private http:HttpClient) { }
  AddDepartmentData(id:any)
  {
let data={
  "parentMedicalId":localStorage.getItem('id'),
  "deptName": id.deptName,
  "description":id.description ,
   "isActive":id.isActive
}
    let url = environment.baseURL+environment.Department.ADDDEPARTMENT
    const headers = { 'content-type': 'application/json'} 
    return this.http.post(url,data,{'headers':headers})
    
  }
  GETDEPARTMENTBYID(id:any){
    let url=environment.baseURL+environment.Department.GETDEPARTMENTLIST+"/"+id

    const headers = { 'content-type': 'application/json'} 
    return this.http.get(url,{'headers':headers})
  }
  UPDATEMEDICALDEPARTMENTBYID(id:any){
    let data=
    {
      "parentMedicalId":localStorage.getItem('id'),
      "id": sessionStorage.getItem('editDepartmentId'),
      "deptName":id.deptName,
      "description":id.description ,
       "isActive":id.isActive
    }
    debugger
    let url=environment.baseURL+environment.Department.UPDATEmEDICALDEPARTMENTBYID
    const headers = { 'content-type': 'application/json'} 
    return this.http.post(url,data,{'headers':headers})
  }
  DeleteMedicalDeptById(id){
 
    let data={
      "parentMedicalId":localStorage.getItem('id'),
      "id":id
    }
   
    let url=environment.baseURL+environment.Department.DELETEMEDICALDEPARTMENTBYID;
    const headers = { 'content-type': 'application/json'} 
    return this.http.post(url,data,{'headers':headers})
}
Getmedicalfacility(id){
  let url=environment.baseURL+environment.Department.GETMEDICALFACILITY+"/"+id
  console.log(url);
  
  
      return this.http.get(url)
  }
  updateMedicalFacilityProfile(id:any,ProfileImage:any){
    console.log("hiiiiiiiii",ProfileImage);
    console.log(id)
    
    let data=
    {
      "_id":localStorage.getItem('id'),
      "phone": id.phone,
      "medicalUserType":1,
      "fullName": id.fullName,
      "contactEmail": id.contactEmail,
      "registrationId": id.RegId,
      "establisheedDate":id.establisheedDate,
      "latLong": [28.7041,
                  77.1025],
                  "addressinfo": {
                    "address": id.add_info_add,
                    "city": id.add_info_city,
                    "state": id.add_info_state,
                    "country": id.add_info_country,
                    "postalcode": id.add_info_zipcode,
                },
      "aboutMedicalFacility":id.about,
      "location": {
        "type": "Point",
        "coordinates": [
            28.943079434658797,
            77.74066876852783
        ]
    },
    "profileImage": ProfileImage,
    "profilePhoto": "https://snah.s3.us-east-2.amazonaws.com/1636462728779.jpg"
    }
    let url=environment.baseURL+environment.Department.UPDATEDMEDICALFACILITYPROFILE;
    const headers = { 'content-type': 'application/json'} 
    return this.http.post(url,data,{'headers':headers})
      }
    
      UploadProfileImage(image:File){
        var formdata = new FormData()
        formdata.append('file',image)
 
        let url=environment.baseURL+environment.Department.UPLOADPROFILEIMAGE;
        const headers = { 'content-type': 'multipart/form-data'} 
        return this.http.post<any>(url,formdata)
        
      }
      }


