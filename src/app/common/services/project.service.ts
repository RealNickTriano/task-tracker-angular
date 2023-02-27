import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:5000';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  endpoint: String = 'projects';

  constructor(private http: HttpClient) { }

  private getUrl() {
    return `${BASE_URL}/${this.endpoint}`
  }

  private getUrlWithID(id: Number) {
    return `${this.getUrl()}/${id}`;
  }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.getUrl());
  }

  createNewProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.getUrl(), project);
  }

  deleteProject(project: Project): Observable<Project> {
    return this.http.delete<Project>(this.getUrlWithID(project.id));
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(this.getUrlWithID(project.id), project);
  }
}
