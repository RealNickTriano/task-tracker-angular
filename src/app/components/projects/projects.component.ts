import { Component, OnInit } from '@angular/core';
import { Project, emptyProject } from 'src/app/common/models/Project';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { ProjectService } from 'src/app/common/services/project.service';

interface Filter {
  name: string,
  key: string,
  active: boolean
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
  projectInEdit: Project = emptyProject;
  editing: boolean = false;
  newing: boolean = false;
  viewTasks: boolean = false;

  filters: Filter[] = [
    {name: "All Projects", key: "", active: true},
    {name: "In Progress", key: "In Progress", active: false},
    {name: "Not Started", key: "Not Started", active: false},
    {name: "Completed", key: "Completed", active: false}
  ]

  constructor(private projectService: ProjectService, 
              private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.fetchProjects();
  }

  goBack(backTo: string) {
    if (backTo === "projects") {
      this.editing = false;
      this.newing = false;
    }
  }

  fetchProjects() {
    this.projectService.getAllProjects(this.firebaseService.user.uid)
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
    this.viewTasks = true;
  }

  editProject(project: Project) {
    this.projectInEdit = project;
    this.editing = true;
  }

  newProject() {
    this.projectInEdit = emptyProject;
    this.newing = true;
  }

  saveProject(project: Project) {
    project.uid = this.firebaseService.user.uid;
    this.projectService.createNewProject(project)
      .subscribe(result => this.fetchProjects());
    this.newing = false;
  }

  deleteProject(project: Project) {
    this.projectService.deleteProject(project)
      .subscribe(result => this.fetchProjects());
    this.editing = false;
  }

  updateProject(project: Project) {
    this.projectService.updateProject(project)
      .subscribe(result => this.fetchProjects());
    this.editing = false;
  }

}
