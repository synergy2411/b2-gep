import { Component, Input, TemplateRef, ViewChild, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'lib-customized',
  templateUrl: './customized.component.html',
  styleUrls: ['./customized.component.css']
})
export class CustomizedComponent implements OnInit, AfterViewInit{

  @Input("headerTempl") headerTempl : TemplateRef<any>

  @ViewChild("defaultTemplate", { static : false}) defaultTemplate : TemplateRef<any>;

  @Output("toTheParent") toTheParent = new EventEmitter<any>();

  ngOnInit(){
    console.log("INIT")
    this.toTheParent.emit(this.defaultTemplate);
  }

  ngAfterViewInit(){
    console.log("VIEW INIT")
    this.toTheParent.emit(this.defaultTemplate);
  }

}
