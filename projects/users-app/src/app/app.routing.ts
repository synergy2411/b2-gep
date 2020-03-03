import { Routes } from "@angular/router";
import { UserComponent } from "./components/user/user.component";
import { PipeDemoComponent } from "./components/pipe-demo/pipe-demo.component";
import { ObservableDemoComponent } from "./components/observable-demo/observable-demo.component";

export const APP_ROUTES: Routes = [
  {
    path : "",              // http://localhost:4200
    redirectTo : "/user",
    pathMatch : "full"
  },
  {
    path: "user",           // http://localhost:4200/user
    component: UserComponent
  },
  {
    path: "pipe",           // http://localhost:4200/pipe
    component: PipeDemoComponent
  },
  {
    path: "observable",      // http://localhost:4200/observable
    component: ObservableDemoComponent
  },
  {
    path: "**",             // http://localhost:4200/doesnotexist
    redirectTo: "/user",
    pathMatch: "full"
  }
];
