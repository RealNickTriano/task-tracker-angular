import { Component, Input, OnInit } from '@angular/core';
import { Task, emptyTask } from 'src/app/common/models/Task';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit{

  @Input() selectedTask: Task = {
    "id": 2,
    "projectId": 1,
    "title": "Update User Profile",
    "description": "Add new fields to the user profile page and do this",
    "deadline": new Date("2023-03-10"),
    "category": "Feature",
    "color": "blue",
    "priority": 'Low',
    "status": "Completed"
  };
  
  constructor() {}

  ngOnInit(): void {

  }

}
