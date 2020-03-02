import { Component, TemplateRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { AlertComponent } from './components/alert/alert.component';
import { PlaceholderDirective } from './directives/placeholder.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Awesome App';
  showAlert: boolean = false;
  @ViewChild(PlaceholderDirective, {static : false}) placeholder : PlaceholderDirective;
  unSub : Subscription;

  fromChild(defaultTempl : TemplateRef<any>){
    console.log("IN APP COMP : ", defaultTempl);
  }

  constructor(private cmpFactoryResolver : ComponentFactoryResolver){}

  onShowAlert(){
    const cmpFactory = this.cmpFactoryResolver.resolveComponentFactory(AlertComponent)

    this.placeholder.vcRef.clear();

    const cmpFactoryRef = this.placeholder.vcRef.createComponent(cmpFactory);

    cmpFactoryRef.instance.message = "My Dynamic Component!"

    this.unSub = cmpFactoryRef.instance.onAlertClose.subscribe(() => {
      this.unSub.unsubscribe();
      this.placeholder.vcRef.clear();
    })

  }

}
