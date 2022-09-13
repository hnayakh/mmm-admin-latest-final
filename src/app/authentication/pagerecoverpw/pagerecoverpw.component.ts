import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigninService } from 'src/app/Services/signin.service';
import Swal from 'sweetalert2';
declare var jQuery:any;
@Component({
  selector: 'app-pagerecoverpw',
  templateUrl: './pagerecoverpw.component.html',
  styleUrls: ['./pagerecoverpw.component.css']
})
export class PagerecoverpwComponent implements OnInit {

submitted=false
constructor(private fb:FormBuilder,private signinService:SigninService) { }
forgotPassword:FormGroup
ngOnInit(): void {
  this.forgotPassword=this.fb.group({
    email:['',Validators.required]
  })
}
get f() {
  return this.forgotPassword.controls;
}
forgotAlert(){
this.submitted=true
console.log(this.forgotPassword.value);
this.signinService.forgetPassword(this.forgotPassword.value).subscribe((responce)=>{
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Password sent successfully On Your Email'
  })

} , (error)=>{
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'error',
  title: error.error.error
})
})

}}