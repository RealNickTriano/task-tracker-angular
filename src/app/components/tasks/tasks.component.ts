import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task, emptyTask } from 'src/app/common/models/Task';
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
  shownTasks: Task[] = this.tasks;
  taskInEdit: Task = emptyTask;
  editing: boolean = false;
  newing: boolean = false;
  selectedTask: Task = emptyTask;
  filters: string[] = ["Show All", "Show All", "Show All"];
  viewTask: boolean = false;

  constructor(private route: ActivatedRoute, 
              private taskService: TaskService) {}

  ngOnInit(): void {
    this.getProjectIdFromUrl();
    this.fetchTasks(this.projectId);
  }

  onSelectStatus(value: string) {
    this.filters[0] = value;
    if (value !== "Show All") {
      this.shownTasks = this.tasks.filter(item => item.status === value);
    } else {
      this.shownTasks = this.tasks;
    }
    if (this.filters[1] !== "Show All") {
      this.shownTasks = this.shownTasks.filter(item => item.priority.toString() === this.filters[1]);
    }
    if (this.filters[2] !== "Show All") {
      this.shownTasks = this.shownTasks.filter(item => item.category === this.filters[2]);
    } 
  }

  filterTasks() {
    for (let i = 0; i < this.filters.length; i++) {
      if (this.filters[i] !== "Show All") {
        this.shownTasks = this.shownTasks
          .filter(item => item.status === this.filters[i]);
      }
    }
  }

  onSelectPriority(value: string) {
    this.filters[1] = value;
    if (value !== "Show All") {
      this.shownTasks = this.tasks.filter(item => item.priority.toString() === this.filters[1]);
      
    } else {
      this.shownTasks = this.tasks;
    }
    if (this.filters[0] !== "Show All") {
      this.shownTasks = this.shownTasks.filter(item => item.status === this.filters[0]);
    }
    if (this.filters[2] !== "Show All") {
      this.shownTasks = this.shownTasks.filter(item => item.category === this.filters[2]);
    }
  }

  onSelectCategory(value: string) {
    this.filters[2] = value;
    if (value !== "Show All") {
      this.shownTasks = this.tasks.filter(item => item.category === this.filters[2]);
    } else {
      this.shownTasks = this.tasks;
    }
    if (this.filters[0] !== "Show All") {
      this.shownTasks = this.shownTasks.filter(item => item.status === this.filters[0]);
    }
    if (this.filters[1] !== "Show All") {
      this.shownTasks = this.shownTasks.filter(item => item.priority.toString() === this.filters[1]);
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
      this.selectedTask = emptyTask;
      this.taskInEdit = emptyTask;
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
