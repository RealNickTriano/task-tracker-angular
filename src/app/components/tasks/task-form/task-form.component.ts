import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project, emptyProject } from 'src/app/common/models/Project';
import { Task, emptyTask } from 'src/app/common/models/Task';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit{

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

  onGoBack() {
    this.clearForm();
    this.goBack.emit('tasks');
  }

  clearForm() {
    this.selectedTask = emptyTask;
  }

}
