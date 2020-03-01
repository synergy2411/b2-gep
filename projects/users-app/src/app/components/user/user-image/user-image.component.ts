import { Component, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent {

  textFromChild : string = "";
  @Input("user") user : any;
  @Output("childEvent") childEvent = new EventEmitter<any>();
  @Output("textChild") textChild = new EventEmitter<string>();
  @ViewChild("childCtrl", { static : false}) childCtrl : ElementRef;

  onBtnClick(user : any){
    // output the emitted event
    this.childEvent.emit(user)
  }

  onKeyUp(){
    this.textChild.emit(this.textFromChild);
    // this.textChild.emit(this.childCtrl.nativeElement.value);
  }

}
