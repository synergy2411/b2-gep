import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent{

  contact_num :string = "987654321";
  filteredStatus : string = "";

  todos = [{
    label : "read the books",
    status : "pending"
  },{
    label : "pot the plant",
    status : "done"
  },{
    label : "renew insurance",
    status : "pending"
  },{
    label : "repair the car",
    status : "done"
  }]

  onAddItem(){
    this.todos.push({label : "New Item", status : "pending"});
  }


  promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve("Here the data comes!")
    }, 3000);
  })
}
