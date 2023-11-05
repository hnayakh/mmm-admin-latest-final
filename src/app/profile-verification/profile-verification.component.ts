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
  ngOnInit() {
   // this.userService.getProfileDocuments();

  }

}
