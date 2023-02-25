import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/common/models/Project';
import { ProjectService } from 'src/app/common/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects() {
    this.projectService.getAllProjects()
      .subscribe((projects: Project[]) => this.projects = projects);
  }

}
