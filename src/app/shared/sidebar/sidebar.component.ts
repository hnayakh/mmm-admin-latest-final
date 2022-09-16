import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionService } from 'src/app/Services/subscription.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private redirection:SubscriptionService,private router:Router) { }

  ngOnInit() {
  }
//   NavigateAccToCond(){
//     let ID =localStorage.getItem('id')
//     this.redirection.CheckSubscriptionPlan(ID).subscribe((dataa:any)=>{
// if(dataa.isSubscribed=="yes"){
 
//  this.router.navigate(['/subscription/all-plan/'])
// }else{
//   this.router.navigate(['/subscription/'])
// }
//     })
   
//   }
  Logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
