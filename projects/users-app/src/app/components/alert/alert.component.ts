import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input('message') message : string;
  @Output('onAlertClose') onAlertClose = new EventEmitter<boolean>()

  onClose(){
    this.onAlertClose.emit(true);
  }

  constructor() { }

  ngOnInit() {
  }

}
