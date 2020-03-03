import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GepUtilLibModule } from 'my-gep-util';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserImageComponent } from './components/user/user-image/user-image.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { HightlightDirective } from './directives/highlight.directive';
import { AlertComponent } from './components/alert/alert.component';
import { PlaceholderDirective } from './directives/placeholder.directive';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { NationaCodePipe } from './pipes/nationalcode.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { LoggerInterceptorService } from './services/logger.interceptor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { APP_ROUTES } from './app.routing';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent, UserComponent, UserImageComponent, UserDetailComponent,
    HightlightDirective,
    AlertComponent,
    PlaceholderDirective,
    PipeDemoComponent,
    NationaCodePipe,
    FilterPipe,
    ObservableDemoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, FormsModule, GepUtilLibModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : LoggerInterceptorService,
    multi : true
  }],
  entryComponents :     [AlertComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
