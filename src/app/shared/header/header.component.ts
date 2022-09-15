import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/Services/signin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
userName:string
  dismiss: string;

  constructor(private router:Router,private securityvarification:SigninService,
    private fb:FormBuilder) { }
  submitted=false
  varifyPin:FormGroup
  ngOnInit() {
    this.varifyPin=this.fb.group({
      pin:['',Validators.required]
    })
    this.userName = localStorage.getItem('UserName')
    // this.getAllNotifications();
  }

  signout(){
  localStorage.clear();
  
  }
  get f(){
    return this.varifyPin.controls
    }
  varifyDetailsForSecurityPin(){
    this.submitted=true
    console.log(this.varifyPin.value);
    this.securityvarification.varifySecurityPin(this.varifyPin.value.pin).subscribe((result)=>{
   Swal.fire({
    position: 'top',
    icon: 'success',
    title:"Access granted",
    showConfirmButton: false,
    timer: 1500
  });
 
  // setInterval(() => {
  //   window.location.reload()
  //    console.log('Changing outside zone');
  //  }, 2000);
   this.router.navigate(['/profile/editprofile'])
    }
    ,
    (error)=>{
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: error.error.message,
        showConfirmButton: false,
        timer: 1500
      });
    })
    
  }
  // getAllNotifications(){
  //   let id =localStorage.getItem('id')
  //   this.securityvarification.getAllNotification(id).subscribe((result)=>{

  //   })
  // }
}
