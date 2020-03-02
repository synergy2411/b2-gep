import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GepUtilLibModule } from 'my-gep-util';
import { HttpClientModule } from '@angular/common/http';

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

@NgModule({
  declarations: [
    AppComponent, UserComponent, UserImageComponent, UserDetailComponent,
    HightlightDirective,
    AlertComponent,
    PlaceholderDirective,
    PipeDemoComponent,
    NationaCodePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule, FormsModule, GepUtilLibModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents :     [AlertComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
