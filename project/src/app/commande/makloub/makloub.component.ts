import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-makloub',
  templateUrl: './makloub.component.html',
  styleUrls: ['./makloub.component.scss']
})
export class MakloubComponent implements OnInit {
  @Output() popup2= new EventEmitter<any>();

  constructor() { }
  closepopup(){
    this.popup2.emit(false)
  }
  ngOnInit(): void {
  }

}
