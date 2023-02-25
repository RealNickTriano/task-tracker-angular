import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/common/models/Project';
import { ProjectService } from 'src/app/common/services/project.service';

interface Filter {
  name: string,
  key: string
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  selectedProjects: Project[] = [];

  filters: Filter[] = [
    {name: "All Projects", key: ""},
    {name: "In Progress", key: "In Progress"},
    {name: "Not Started", key: "Not Started"},
    {name: "Completed", key: "Completed"},
  ]

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects() {
    this.projectService.getAllProjects()
      .subscribe((projects: Project[]) => {
        this.projects = projects;
        this.selectedProjects = projects;
      });
  }

  filterProjectsByStatus(key: string) {
    if (key === "") {
      this.selectedProjects = this.projects;
    } else {
      this.selectedProjects = this.projects.filter(
        item => item.status === key);
    }
  }

}
