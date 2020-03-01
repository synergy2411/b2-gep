import { Component, OnChanges, OnInit, DoCheck, AfterContentInit,
   AfterContentChecked, AfterViewInit, AfterViewChecked,
   OnDestroy, Input, SimpleChanges } from '@angular/core';
import { IUser } from '../../model/user';
import { USER_DATA } from '../../model/mocks';

@Component({
  selector : "app-user",
  templateUrl : `./user.component.html`
})
export class UserComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  user : IUser;

  text : string;
  @Input("title") title : string;

  onMoreInfo(user: any){
    alert(`Hello from ${user.firstName}! Working with ${user.company}!!`);
  }

  onChildText(text : string){
    this.text = text;
  }

  constructor(){
    // console.log("Constructor");

  }

  ngOnChanges(changes : SimpleChanges){
    // console.log("ngOnChanges", changes);
  }
  ngOnInit(){
    // console.log("ngOnInit");
    this.user = USER_DATA;
  }
  ngDoCheck(){
    // console.log("ngDoCheck")
  }
  ngAfterContentInit(){
    // console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(){
    // console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(){
    // console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(){
    // console.log("ngAfterViewChecked")
  }
  ngOnDestroy(){
    // console.log("ngOnDestroy")
  }



}
