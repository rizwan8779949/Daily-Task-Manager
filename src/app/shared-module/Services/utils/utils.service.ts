import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}
  taskList$ = new BehaviorSubject(null);
  pendingTaskList = new Array();
  completedTaskList = new Array();
  inprogressTaskList = new Array();
  setLocalStorage(key, value) {
    JSON.stringify(localStorage.setItem(key, value));
  }
  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  addTaskCondition(form) {
    this.pendingTaskList = [];
    this.completedTaskList = [];
    this.inprogressTaskList = [];
    if (form.controls.priority.value == 'In Progress') {
      if (localStorage.getItem('inprogressTask')) {
        this.inprogressTaskList = JSON.parse(
          localStorage.getItem('inprogressTask')
        );
        this.inprogressTaskList.unshift(form.value);
      } else {
        this.inprogressTaskList.push(form.value);
      }
      console.log(this.inprogressTaskList, 'inprogerss Task');
      localStorage.setItem(
        'inprogressTask',
        JSON.stringify(this.inprogressTaskList)
      );
    } else if (form.controls.priority.value == 'Completed') {
      if (localStorage.getItem('completedTask')) {
        this.completedTaskList = JSON.parse(
          localStorage.getItem('completedTask')
        );
        this.completedTaskList.unshift(form.value);
      } else {
        this.completedTaskList.push(form.value);
      }
      console.log(this.completedTaskList, 'completed Task');
      localStorage.setItem(
        'completedTask',
        JSON.stringify(this.completedTaskList)
      );
    } else if (form.controls.priority.value == 'Pending') {
      if (localStorage.getItem('pendingTask')) {
        this.pendingTaskList = JSON.parse(localStorage.getItem('pendingTask'));
        this.pendingTaskList.unshift(form.value);
      } else {
        this.pendingTaskList.push(form.value);
      }
      console.log(this.pendingTaskList, 'peding Task');
      localStorage.setItem('pendingTask', JSON.stringify(this.pendingTaskList));
    }
    this.taskList$.next(form.value);
  }
  editTaskCondition(form) {
    this.completedTaskList = [];
    this.inprogressTaskList = [];
    if (form.controls.priority.value == 'In Progress') {
      if (localStorage.getItem('inprogressTask')) {
        this.inprogressTaskList = JSON.parse(
          localStorage.getItem('inprogressTask')
        );
        this.inprogressTaskList.unshift(form.value);
      } else {
        this.inprogressTaskList.push(form.value);
      }
      console.log(this.inprogressTaskList, 'inprogerss Task');
      localStorage.setItem(
        'inprogressTask',
        JSON.stringify(this.inprogressTaskList)
      );
    } else if (form.controls.priority.value == 'Completed') {
      if (localStorage.getItem('completedTask')) {
        this.completedTaskList = JSON.parse(
          localStorage.getItem('completedTask')
        );
        this.completedTaskList.unshift(form.value);
      } else {
        this.completedTaskList.push(form.value);
      }
      console.log(this.completedTaskList, 'completed Task');
      localStorage.setItem(
        'completedTask',
        JSON.stringify(this.completedTaskList)
      );
    }
  }
}
