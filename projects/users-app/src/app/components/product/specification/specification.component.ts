import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {

  productName : string;
  constructor(private route : ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
    })
  }

  ngOnInit() {
  }

}
