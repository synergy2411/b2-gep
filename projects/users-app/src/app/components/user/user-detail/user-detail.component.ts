import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  @Input("user") user : any;
  @Input("text") text : string;

  dynamicClasses  = {'feature' : false, 'my-border' : true}

  onToggle(){
    this.dynamicClasses['feature'] = !this.dynamicClasses['feature']
    this.dynamicClasses['my-border'] = !this.dynamicClasses['my-border']
  }

}
