import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-balance',
  templateUrl: './user-balance.component.html',
  styleUrls: ['./user-balance.component.css']
})
export class UserBalanceComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  ActiveUserList: any;
  recentSearchList = []
  adminData:any;
  Relationships = ["Self", "Son", "Daughter", "Sister", "Brother", "Friend", "Relative"];
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.GetAllActiveUsers()
  }
  ngOnDestroy(){
if(this.adminData){
  this.adminData.unsubscribe();
}
  }
  GetAllActiveUsers() {
    this.adminData=
    this.userService.getAllUsersAdmin().subscribe(
      (data:any) => {
        console.log(data);
        this.ActiveUserList=data.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
