import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GepUtilLibModule } from 'my-gep-util';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserImageComponent } from './components/user/user-image/user-image.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { HightlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent, UserComponent, UserImageComponent, UserDetailComponent,
    HightlightDirective
  ],
  imports: [
    BrowserModule, FormsModule, GepUtilLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
