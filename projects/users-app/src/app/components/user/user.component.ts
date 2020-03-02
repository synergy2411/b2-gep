import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from '../../model/user';
import { DataService } from '../../services/data.service';
// import { USER_DATA } from '../../model/mocks';

@Component({
  selector : "app-user",
  templateUrl : `./user.component.html`,
  styles: [`
    ul li{
      margin-bottom : 8px;
    }
  `]
})
export class UserComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  users : IUser[];

  text : string;
  @Input("title") title : string;

  onMoreInfo(user: any){
    alert(`Hello from ${user.firstName}! Working with ${user.company}!!`);
  }

  onChildText(text : string){
    this.text = text;
  }

  constructor(private dataService: DataService){
    // console.log("Constructor");
  }

  ngOnChanges(changes : SimpleChanges){
    // console.log("ngOnChanges", changes);
  }
  ngOnInit(){
    // this.users = this.dataService.getUserData();
    this.dataService.getApiData()
      .subscribe(response => {
        this.users = <IUser[]>response['userdata']
      });
    // console.log("ngOnInit");
    // this.users = USER_DATA;
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
