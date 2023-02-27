import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/common/models/Task';
import { ProjectService } from 'src/app/common/services/project.service';
import { TaskService } from 'src/app/common/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit { 

  projectId: number = 0;
  tasks: Task[] = [];

  constructor(private route: ActivatedRoute, 
              private taskService: TaskService) {}

  ngOnInit(): void {
    this.getProjectIdFromUrl();
    this.fetchTasks(this.projectId);
  }

  getProjectIdFromUrl() {
    this.route.params
      .subscribe(value => this.projectId = value['id']);
  }

  fetchTasks(id: number) {
    this.taskService.fetchTasksByProjectId(id)
      .subscribe(result => this.tasks = result);
  }

}
