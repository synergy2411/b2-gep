import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent {

  unSub : Subscription;

  myObs$ = Observable.create(observer => {
    setTimeout(()=>{
      observer.next("First Package")
    }, 1000);
    setTimeout(()=>{
      observer.next("Second Package")
    }, 2000);
    setTimeout(()=>{
      observer.next("Third Package")
    }, 4000);
    setTimeout(()=>{
      observer.error(new Error("????"))
    }, 5000);

    setTimeout(()=>{
      observer.complete();
    }, 6000);
  })

  pkgs : any[] = [];

  onSubscribe(){
    this.unSub = this.myObs$.subscribe(
      response => {
      console.log(response);
      this.pkgs.push(response);
    },
      err => console.group(err),
      () => console.log("COMPLETED")
    )
  }
  onUnsubscribe(){
    this.unSub.unsubscribe();
  }


}
