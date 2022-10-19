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

        path: "pending-verifications",
        loadChildren: () =>
          import("./pending-verifications/pending-verifications.module").then(
            (m) => m.PendingVerificationsModule
          ),
      },
      {
        // lazy loading

        path: "product-pricing",
        loadChildren: () =>
          import("./product-pricing/product-pricing.module").then(
            (m) => m.ProductPricingModule
          ),
      },
      {
        // lazy loading

        path: "referral-benifits",
        loadChildren: () =>
          import("./referral-benifits/referral-benifits.module").then(
            (m) => m.ReferralBenifitsModule
          ),
      },
      {
        // lazy loading

        path: "coupon",
        loadChildren: () =>
          import("./coupon/coupon.module").then((m) => m.CouponModule),
      },
      {
        // lazy loading

        path: "faq",
        loadChildren: () => import("./faq/faq.module").then((m) => m.FaqModule),
      },
      {
        // lazy loading

        path: "success-stories",
        loadChildren: () =>
          import("./success-stories/success-stories.module").then(
            (m) => m.SuccessStoriesModule
          ),
      },
      {
        // lazy loading

        path: "content-creation",
        loadChildren: () =>
          import("./content-creation/content-creation.module").then(
            (m) => m.ContentCreationModule
          ),
      },
      {
        // lazy loading

        path: "broadcast-content",
        loadChildren: () =>
          import("./broadcast-content/broadcast-content.module").then(
            (m) => m.BroadcastContentModule
          ),
      },
      // {
      //   // lazy loading

      //   path: "payment-details",
      //   loadChildren: () =>
      //     import("./payment-details/payment-details.module").then(
      //       (m) => m.PaymentDetailsModule
      //     ),
      // },
      // {
      //   // lazy loading

      //   path: "connect-details",
      //   loadChildren: () =>
      //     import("./connect-details/connect-details.module").then(
      //       (m) => m.ConnectDetailsModule
      //     ),
      // },
      {
        // lazy loading

        path: "user-balance",
        loadChildren: () =>
          import("./user-balance/user-balance.module").then(
            (m) => m.UserBalanceModule
          ),
      },
      {
        // lazy loading

        path: "meet",
        loadChildren: () =>
          import("./meet/meet.module").then((m) => m.MeetModule),
      },
      {
        // lazy loading

        path: "account",
        loadChildren: () =>
          import("./account/account.module").then((m) => m.AccountModule),
      },
      {
        // lazy loading

        path: "user-communication",
        loadChildren: () =>
          import("./user-communication/user-communication.module").then(
            (m) => m.UserCommunicationModule
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
