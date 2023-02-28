import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/common/models/Task';
import { ProjectService } from 'src/app/common/services/project.service';
import { TaskService } from 'src/app/common/services/task.service';

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
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit { 

  projectId: number = 0;
  tasks: Task[] = [];
  shownTasks: Task[] = this.tasks;
  taskInEdit: Task = emptyTask;
  editing: boolean = false;
  newing: boolean = false;
  selectedTask: Task = emptyTask;

  constructor(private route: ActivatedRoute, 
              private taskService: TaskService) {}

  ngOnInit(): void {
    this.getProjectIdFromUrl();
    this.fetchTasks(this.projectId);
  }

  onSelectStatus(value: string) {
    if (value != 'Show All') {
      this.shownTasks = this.tasks.filter(item => item.status === value);
    } else {
      this.shownTasks = this.tasks;
    }
    
  }

  getProjectIdFromUrl() {
    this.route.params
      .subscribe(value => this.projectId = value['id']);
  }

  fetchTasks(id: number) {
    this.taskService.fetchTasksByProjectId(id)
      .subscribe(result => 
        {
          this.tasks = result;
          this.shownTasks = this.tasks;
        });
    
  }

  goBack(backTo: string) {
    if (backTo === "tasks") {
      this.editing = false;
      this.newing = false;
    }
  }

  editTask(task: Task) {
    this.taskInEdit = {...task};
    this.editing = true;
  }

  selectProject(task: Task) {
    this.selectedTask = {...task};
  }

  newTask() {
    this.taskInEdit = emptyTask;
    this.newing = true;
  }

  saveTask(task: Task) {
    task.projectId = this.projectId;
    this.taskService.createNewTask(task)
      .subscribe(result => this.fetchTasks(result.projectId));
    this.newing = false;
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task)
      .subscribe(result => this.fetchTasks(this.projectId));
    this.editing = false;
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task)
      .subscribe(result => this.fetchTasks(result.projectId));
    this.editing = false;
  }

}
