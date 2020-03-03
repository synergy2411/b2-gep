import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  productId : number;
  productName : string;

  constructor(private route : ActivatedRoute) {
    this.productId = +this.route.snapshot.params['id'];
    this.route.params.subscribe(params => {
      this.productName = params['pname'];
    })
   }

  ngOnInit() {
  }

}
