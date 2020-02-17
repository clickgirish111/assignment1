import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit {
  @Output('onYesClick') onYesButtonClicked: EventEmitter<any>;
  @Output('onNoClick') onNoButtonClicked: EventEmitter<any>;
  @Input('showDialog') showDialog: boolean;

  constructor() { 
    this.onYesButtonClicked = new EventEmitter();
    this.onNoButtonClicked = new EventEmitter();
  }

  ngOnInit() {
    
  }

  btnYesClick(eventArgs: any) {
    this.onYesButtonClicked.emit(eventArgs);
    this.showDialog = false;
    
  }

  btnNoClick(eventArgs: any) {
    this.onNoButtonClicked.emit(eventArgs);
    this.showDialog = false;
    
  }
}
