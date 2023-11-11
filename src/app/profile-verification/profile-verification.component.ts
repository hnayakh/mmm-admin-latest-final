import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-profile-verification',
  templateUrl: './profile-verification.component.html',
  styleUrls: ['./profile-verification.component.css']
})
export class ProfileVerificationComponent implements OnInit {

  constructor(private userService: UserService) { }
  documents:any[];
  userDetails:any;
  ngOnInit() {
    this.userService.getProfileDocuments("c0504e22-8819-44ce-aa37-c084fecb04ea").subscribe((result:any)=>{
      if(result.data)
      this.documents=result.data.imageDetails.map((doc:any)=>{return {docUrl:doc.imageURL, docType:doc.idProof}})
      this.userDetails=result.data.userAbout;
      console.log("this.documents",this.documents)
    })

  }

}
