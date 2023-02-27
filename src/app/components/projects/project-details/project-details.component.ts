import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() editing: boolean = false;
  @Output() goBack = new EventEmitter();
  @Output() save = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() update = new EventEmitter();

  constructor() {}

  ngOnInit(): void {

  }

}
