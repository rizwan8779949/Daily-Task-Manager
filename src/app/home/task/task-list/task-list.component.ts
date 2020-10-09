import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared-module/Services/api/api.service';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/shared-module/Services/snackBar/snack-bar.service';
import { AddTaskComponent } from '../add-task/add-task.component';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  constructor(private utils: UtilsService, private dialog: MatDialog) {}

  completedlistDto = [];
  inprogresslistDto = [];
  pendinglistDto = [];
  scrore: number;
  ngOnInit() {
    if (localStorage.getItem('completedTask')) {
      this.completedlistDto = [];
      this.completedlistDto = this.utils.getLocalStorage('completedTask');
    }
    if (localStorage.getItem('inprogressTask')) {
      this.inprogresslistDto = [];
      this.inprogresslistDto = this.utils.getLocalStorage('inprogressTask');
    }
    if (localStorage.getItem('pendingTask')) {
      this.pendinglistDto = [];
      this.pendinglistDto = this.utils.getLocalStorage('pendingTask');
    }
    this.scrore = Math.round(
      this.completedlistDto.length
        ? this.completedlistDto.length
        : 0 /
            (this.completedlistDto.length
              ? this.completedlistDto.length
              : 0 + this.pendinglistDto.length
              ? this.pendinglistDto.length
              : 0 + this.inprogresslistDto.length
              ? this.inprogresslistDto.length
              : 0)
    );
  }
  addModal() {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      disableClose: true,
      width: '350px',
      height: '100%',
      position: {
        right: '0',
      },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.utils.taskList$.next(true);
    });
  }
}
