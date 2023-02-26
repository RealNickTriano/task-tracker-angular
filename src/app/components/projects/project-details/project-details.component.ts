import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/common/models/Project';

const emptyProject: Project = {
  id: 0,
  title: "",
  description: "",
  deadline: new Date(),
  status: ""
}

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit{

  currentProject: Project = emptyProject;

  @Input() set project(value: Project) {
    if(!value) return;
    this.currentProject = {...value};
  }

  constructor() {}

  ngOnInit(): void {

  }

}
