import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users-app';


  fromChild(defaultTempl : TemplateRef<any>){
    console.log("IN APP COMP : ", defaultTempl);
  }
}
