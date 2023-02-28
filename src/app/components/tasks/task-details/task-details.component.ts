import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/common/models/Task';

const emptyTask: Task = {
  "id": 0,
  "projectId": 0,
  "title": "",
  "description": "",
  "deadline": new Date(),
  "category": "",
  "color": "",
  "priority": 0,
  "status": ""
}

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
 
  @Input() selectedTask: Task = emptyTask;
  @Input() editing: boolean = false;
  @Input() newing: boolean = false;
  @Output() save = new EventEmitter();
  @Output() update = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() goBack = new EventEmitter();

  constructor() {}

  ngOnInit(): void {

  }
}
