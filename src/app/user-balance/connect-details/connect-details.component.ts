import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-connect-details',
  templateUrl: './connect-details.component.html',
  styleUrls: ['./connect-details.component.css']
})
export class ConnectDetailsComponent implements OnInit {
  UserId:any;
  RechargeHistory: any;
  connectDetails: any;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private userService: UserService) { 
    this.UserId = this.activatedRoute.snapshot.params.id;
  }
 
  ngOnInit() {
   this.RechargeHistory(this.UserId)
  }
  getRechargeHistory(id: any) {
    this.userService.getRechargeHistory(id).subscribe(
      (data: any) => {
        this.RechargeHistory  = data.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
}
