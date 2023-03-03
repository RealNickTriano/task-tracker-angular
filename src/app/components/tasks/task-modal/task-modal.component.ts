import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/common/models/Task';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit {

  @Input()
  task!: Task;
  @Output() closeTask = new EventEmitter();

  constructor() {}

  ngOnInit(): void {

  }

  test() {
    console.log('hello');
  }

}
