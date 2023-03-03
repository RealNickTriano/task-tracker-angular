import { Component, Input, OnInit } from '@angular/core';
import { Task, emptyTask } from 'src/app/common/models/Task';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit{

  @Input() selectedTask: Task = emptyTask;
  
  constructor() {}

  ngOnInit(): void {

  }

}
