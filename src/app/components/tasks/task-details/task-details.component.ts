import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task, emptyTask } from 'src/app/common/models/Task';

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

  setStatus(status: string) {
    this.selectedTask.status = status;
  }

  onGoBack() {
    this.clearForm();
    this.goBack.emit('tasks');
  }

  clearForm() {
    this.selectedTask = emptyTask;
  }
}
