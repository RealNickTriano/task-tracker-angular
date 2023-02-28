import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-button',
  templateUrl: './new-button.component.html',
  styleUrls: ['./new-button.component.scss']
})
export class NewButtonComponent implements OnInit {

  @Output() newTask = new EventEmitter();

  constructor() {}

  ngOnInit(): void {

  }

}
