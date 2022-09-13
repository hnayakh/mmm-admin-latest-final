import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { BlankscreenComponent } from "./layouts/blankscreen/blankscreen.component";
import { FullscreenComponent } from "./layouts/fullscreen/fullscreen.component";

const routes: Routes = [
  {
    path: "",
    component: BlankscreenComponent,
    children: [
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full",
      },
      {
        // lazy loading

        path: "login",
        loadChildren: () =>
          import("./authentication/authentication.module").then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },

  {
    path: "",
    component: FullscreenComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
      {
        // lazy loading

        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        // lazy loading

        path: "active-users",
        loadChildren: () =>
          import("./active-users/active-users.module").then(
            (m) => m.ActiveUsersModule
          ),
      },

      {
        // lazy loading

        path: "admin-users",
        loadChildren: () =>
          import("./admin-users/admin-users.module").then(
            (m) => m.AdminUsersModule
          ),
      },

      {
        // lazy loading

        path: "pending-verifiactions",
        loadChildren: () =>
          import("./pending-verifications/pending-verifications.module").then(
            (m) => m.PendingVerificationsModule
          ),
      },

      {
        path: "report",
        loadChildren: () =>
          import("./report/report.module").then((m) => m.ReportModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
