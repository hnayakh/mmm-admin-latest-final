import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-connect-details',
  templateUrl: './connect-details.component.html',
  styleUrls: ['./connect-details.component.css']
})
export class ConnectDetailsComponent implements OnInit {
  UserId:any;
  constructor(private activatedRoute: ActivatedRoute) { 
    this.UserId = this.activatedRoute.snapshot.params.id;
  }
 
  ngOnInit() {
   console.log(this.UserId)
  }
  
}
