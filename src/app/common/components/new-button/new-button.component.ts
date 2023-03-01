import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-button',
  templateUrl: './new-button.component.html',
  styleUrls: ['./new-button.component.scss']
})
export class NewButtonComponent implements OnInit {

  @Input() name: string = '';
  @Output() newTask = new EventEmitter();

  constructor() {}

  ngOnInit(): void {

  }

}
