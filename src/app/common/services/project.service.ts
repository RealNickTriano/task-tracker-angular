import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//const BASE_URL = 'http://localhost:5000';
const BASE_URL = 'https://fake-backend-pm.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  endpoint: String = 'projects';

  constructor(private http: HttpClient) { }

  private getUrl() {
    return `${BASE_URL}/${this.endpoint}`
  }

  private getUrlWithUID(uid: string) {
    return `${BASE_URL}/${this.endpoint}?uid=${uid}`
  }

  private getUrlWithID(id: Number) {
    return `${this.getUrl()}/${id}`;
  }

  getAllProjects(uid: string): Observable<Project[]> {
    return this.http.get<Project[]>(this.getUrlWithUID(uid));
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(this.getUrlWithID(id));
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
