import { Routes } from "@angular/router";
import { UserComponent } from "./components/user/user.component";
import { PipeDemoComponent } from "./components/pipe-demo/pipe-demo.component";
import { ObservableDemoComponent } from "./components/observable-demo/observable-demo.component";
import { LoginGaurdService } from './services/login-gaurd.service';
import { ProductComponent } from './components/product/product.component';
import { OverviewComponent } from './components/product/overview/overview.component';
import { SpecificationComponent } from './components/product/specification/specification.component';

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
    component: PipeDemoComponent,
    canActivate : [LoginGaurdService]
  },
  {
    path: "observable",      // http://localhost:4200/observable
    component: ObservableDemoComponent
  },{
    path : "product",
    component : ProductComponent,
    children : [{
      path : "overview/:id/:pname",
      component : OverviewComponent
    }, {
      path : "spec",
      component : SpecificationComponent
    }]
  },{
    path : "lazy",
    loadChildren : "./lazy/lazy.module#LazyModule"           // path/to/module/moduleFileName#ModuleClassName
    // loadChildren : () => import("./lazy/lazy.module").then(m => m.LazyModule)
  },
  {
    path: "**",             // http://localhost:4200/doesnotexist
    redirectTo: "/user",
    pathMatch: "full"
  }
];
