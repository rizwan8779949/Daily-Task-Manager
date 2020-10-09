import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  addTask(data) {
    JSON.stringify(localStorage.setItem('task', data));
  }
  editTask(data) {
    JSON.stringify(localStorage.setItem('task', data));
  }
  deleteTask(data) {
    JSON.stringify(localStorage.setItem('task', data));
  }
  getTasks(params?) {
    localStorage.getItem('task');
  }
}
