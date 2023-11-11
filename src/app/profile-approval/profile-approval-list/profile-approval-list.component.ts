import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile-approval-list',
  templateUrl: './profile-approval-list.component.html',
  styleUrls: ['./profile-approval-list.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ProfileApprovalListComponent implements OnInit {
  imageURl =
  "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg";
  imageURL ="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg";
  img ="https://img.icons8.com/external-creatype-outline-colourcreatype/64/000000/external-play-interface-a2-creatype-outline-colourcreatype.png";
  constructor(private userService:UserService, private activatedRoute:ActivatedRoute) { }
  profileImages:any[]=[];
  profileDetails:any[]=[];
  aboutMe:string;
  approvedImages:string []=[];
  rejectedImages:string []=[];
  imageViewerConfig={
    allowKeyboardNavigation: true,
    btnShow:{
    next: false,
    prev: false,
    zoomIn: true,
    zoomOut: true,
    rotateClockwise: true,
    rotateCounterClockwise: true,
  }};
  ngOnInit() {
    let mmmId=this.activatedRoute.snapshot.queryParams['mmmId'];
    let id=this.activatedRoute.snapshot.params['id'];
  this.userService.GetUserProfileDetails(id,mmmId).subscribe((result:any)=>{
    this.profileDetails=result.data;
    console.log("this.profileDetails",this.profileDetails);
    this.profileImages=result.data.userImages;
    this.aboutMe=result.data?result.data.userBios[0].aboutMe:"";
    console.log("result Data", this.aboutMe);
    console.log("this.profileImages",this.profileImages);
  })
  }
  onImageApprove(imageId:string){
    this.approvedImages.push(imageId)
    
  }

  onImageRejected(imageId){
    this.rejectedImages.push(imageId)
  }

  onConfirmClick(){
    let confirmDetails={
      "userBasicId":this.profileDetails['id'], 
      "approvedImageIds":"",
      "rejectedImageIds":"",
       "bioStatus":4   
    }
    this.userService.getImageApproverRejectedDetails(confirmDetails).subscribe((res)=>{
   console.log("postedResult",res);
    })

  }
  onCancelClick(){

    let cancelDetails={
      "userBasicId":this.profileDetails['id'], 
      "approvedImageIds":"",
      "rejectedImageIds":"",
       "bioStatus":3   
    }
    this.userService.getImageApproverRejectedDetails(cancelDetails).subscribe((res)=>{
   console.log("postedResult",res);
    })

  }
}
