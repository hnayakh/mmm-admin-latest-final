import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AngularImageViewerModule } from "@clarivate/angular-image-viewer";
import { ProfileVerificationRoutingModule } from './profile-verification-routing.module';
import { ProfileVerificationComponent } from './profile-verification.component';
console.log("active");

@NgModule({
  declarations: [ProfileVerificationComponent],
  imports: [
    CommonModule,
    ProfileVerificationRoutingModule,DataTablesModule,CarouselModule,
    AngularImageViewerModule
  ]
})
export class ProfileVerificationModule { }
