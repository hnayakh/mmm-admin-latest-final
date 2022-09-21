import { Component, OnInit, Pipe } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/Services/user.service";
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: "app-verification-list",
  templateUrl: "./verification-list.component.html",
  styleUrls: ["./verification-list.component.css"],
})
export class VerificationListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  PendingUserList: any;
  Relationships = ["Self", "Son", "Daughter", "Sister", "Brother", "Friend", "Relative"];
  options = {
    filterType: 'checkbox',
  };
 displayedColumns: string[] = ['id', 'name','email', 'phoneNumber', 'gender',
  'motherTongue','activationStatus', 'careerCountry', 'careerCity',
  'careerState','cast','createdAt',
  'displayId','gothra','lifecycleStatus','relationship','religion'];
 //'];  //, 'created by', 'religion' , 'caste', 'location'];
 //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
 filterSelectObj = [];
 dataSource: any[];
  constructor(private router: Router, private userService: UserService) {
    // this.filterSelectObj = [
    //   {
    //     name: 'ID',
    //     columnProp: 'id',
    //     options: []
    //   }, {
    //     name: 'NAME',
    //     columnProp: 'name',
    //     options: []
    //   }, {
    //     name: 'EMAIL',
    //     columnProp: 'email',
    //     options: []
    //   }, {
    //     name: 'MOBILE',
    //     columnProp: 'mobile',
    //     options: []
    //   },{
    //     name: 'GENDER',
    //     columnProp: 'gender',
    //     options: []
    //   },{
    //     name: 'JOINED ON',
    //     columnProp: 'joined on',
    //     options: []
    //   },{
    //     name: 'CREATED BY',
    //     columnProp: 'created by',
    //     options: []
    //   },{
    //     name: 'RELIGION',
    //     columnProp: 'religion',
    //     options: []
    //   },{
    //     name: 'CASTE',
    //     columnProp: 'caste',
    //     options: []
    //   },{
    //     name: 'LOCATION',
    //     columnProp: 'location',
    //     options: []
    //   }
    // ]
  }
  
 getAllPendingUsers() {
    this.userService.GetAllPendingUsers().subscribe(
      (response:any) => {
        console.log(response);
        this.PendingUserList = response.data.users;
        this.dataSource =response.data.users
        console.log("dataSource", this.dataSource )
      },
      (error) => {}
    );
  }
  ngOnInit() {
    this.getAllPendingUsers();
   // this.dataSource=ELEMENT_DATA;
    // this.getRemoteData();
    // this.dataSource.filterPredicate = this.createFilter();

    }
    
    


  }
 
  // this.getAllPendingUsers(); {
  //   this.userService.GetAllPendingUsers().subscribe(
  //     (response:any) => {
  //       console.log(response);
  //       this.PendingUserList = response.data.users;
  //     },
  //     (error) => {}
  //   );
  // }



  export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  
