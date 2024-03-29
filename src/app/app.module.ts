import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FullscreenComponent } from "./layouts/fullscreen/fullscreen.component";
import { BlankscreenComponent } from "./layouts/blankscreen/blankscreen.component";
import { SigninService } from "./Services/signin.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpTokenInterceptor } from "./Services/token-interceptor.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthGuard } from "./auth.guard";
import { AdminUsersModule } from "./admin-users/admin-users.module";
import { PendingVerificationsModule } from "./pending-verifications/pending-verifications.module";
import { DataTablesModule } from "angular-datatables";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AngularDraggableModule } from "angular2-draggable";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatSliderModule } from "@angular/material/slider";
import { MatExpansionModule } from "@angular/material";
import { UserBalanceComponent } from "./user-balance/user-balance.component";

import { SearchHeaderComponent } from "./search-header/search-header.component";

import { UserRequestModule } from "./user-request/user-request.module";
@NgModule({
  declarations: [AppComponent, FullscreenComponent, BlankscreenComponent],
  imports: [ 
   
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminUsersModule,
    PendingVerificationsModule,
    DataTablesModule,
    BrowserAnimationsModule,
    AngularDraggableModule,
    DragDropModule,
    MatSliderModule,
    UserRequestModule,
    MatExpansionModule,
  ],
  
  providers: [
    SigninService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true,
    },
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
