import { Component } from '@angular/core';

@Component({
  selector : "app-user",
  templateUrl : `./user.component.html`
})
export class UserComponent{

  user = {
    firstName : "bill",
    lastName : "gates",
    dob : new Date("Dec 21, 1965"),
    income : 500,
    isWorking : true,
    company : "Microsoft",
    votes : 120,
    image : "assets/images/bill.jpg"
  }
  text : string;
  
  onMoreInfo(user: any){
    alert(`Hello from ${user.firstName}! Working with ${user.company}!!`);
  }

  onChildText(text : string){
    this.text = text;
  }


}
