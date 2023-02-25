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

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.getUrl());
  }
}
