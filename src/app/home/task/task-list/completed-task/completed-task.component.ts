import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared-module/Services/api/api.service';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/shared-module/Services/snackBar/snack-bar.service';
import { AddTaskComponent } from '../../add-task/add-task.component';
import { EditTaskComponent } from '../../edit-task/edit-task.component';
import { DeleteTaskComponent } from '../../delete-task/delete-task.component';
@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.scss'],
})
export class CompletedTaskComponent implements OnInit {
  constructor(
    private api: ApiService,
    private utils: UtilsService,
    private router: Router,
    private snackBarService: SnackBarService,
    private dialog: MatDialog
  ) {}
  completedlistDto = new Array();
  ngOnInit(): void {
    this.getTaskList();
    this.refreshList();
  }
  getTaskList() {
    if (localStorage.getItem('completedTask')) {
      this.completedlistDto = [];
      this.completedlistDto = this.utils.getLocalStorage('completedTask');
    }
  }
  refreshList() {
    this.utils.taskList$.subscribe((res: any) => {
      if (res) {
        this.getTaskList();
      }
    });
  }
  editModal(data) {
    const dialogRef = this.dialog.open(EditTaskComponent, {
      disableClose: true,
      width: '350px',
      height: '100%',
      position: {
        right: '0',
      },
      data: data,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.utils.taskList$.next(true);
    });
  }
  deleteModal(data) {
    const dialogRef = this.dialog.open(DeleteTaskComponent, {
      disableClose: true,
      data: data,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.utils.taskList$.next(true);
    });
  }
}
