import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/Task';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:5000';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  endpoint: String = 'tasks';

  constructor(private http: HttpClient) { }

  private getUrl() {
    return `${BASE_URL}/${this.endpoint}`
  }

  private getUrlWithTaskId(id: Number) {
    return `${this.getUrl()}/${id}`;
  }

  private getUrlWithProjectId(id: Number) {
    return `${this.getUrl()}?projectId=${id}`;
  }

  fetchTasksByProjectId(id: Number): Observable<Task[]> {
    return this.http.get<Task[]>(this.getUrlWithProjectId(id));
  }
}
