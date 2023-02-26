import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/common/models/Project';
import { ProjectService } from 'src/app/common/services/project.service';

interface Filter {
  name: string,
  key: string,
  active: boolean
}

const emptyProject: Project = {
  id: 0,
  title: "",
  description: "",
  deadline: new Date(),
  status: ""
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  selectedProjects: Project[] = [];
  selectedProject: Project = emptyProject;

  filters: Filter[] = [
    {name: "All Projects", key: "", active: true},
    {name: "In Progress", key: "In Progress", active: false},
    {name: "Not Started", key: "Not Started", active: false},
    {name: "Completed", key: "Completed", active: false}
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

  onFilterButtonClick(filter: Filter) {
    for (let item of this.filters) {
      if (item.name === filter.name) item.active = true;
      else item.active = false;
    }
    this.filterProjectsByStatus(filter.key);
  }

  filterProjectsByStatus(key: string) {
    if (key === "") {
      this.selectedProjects = this.projects;
    } else {
      this.selectedProjects = this.projects.filter(
        item => item.status === key);
    }
  }

  selectProject(project: Project) {
    this.selectedProject = project;
  }

}
