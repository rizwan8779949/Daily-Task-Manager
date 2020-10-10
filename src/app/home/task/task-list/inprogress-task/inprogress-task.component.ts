import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared-module/Services/api/api.service';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/shared-module/Services/snackBar/snack-bar.service';
import { AddTaskComponent } from '../../add-task/add-task.component';
import { EditTaskComponent } from '../../edit-task/edit-task.component';
import { DeleteTaskComponent } from '../../delete-task/delete-task.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-inprogress-task',
  templateUrl: './inprogress-task.component.html',
  styleUrls: ['./inprogress-task.component.scss'],
})
export class InprogressTaskComponent implements OnInit {
  constructor(
    private api: ApiService,
    private utils: UtilsService,
    private router: Router,
    private snackBarService: SnackBarService,
    private dialog: MatDialog
  ) {}
  @Input() inprogresslistDto = [];
  ngOnInit(): void {
    this.getTaskList();
    this.refreshList();
  }
  getTaskList() {
    if (localStorage.getItem('inprogressTask')) {
      this.inprogresslistDto = [];
      this.inprogresslistDto = this.utils.getLocalStorage('inprogressTask');
    }
  }
  refreshList() {
    this.utils.taskList$.subscribe((res: any) => {
      if (res) {
        this.getTaskList();
      }
    });
  }

  editModal(data, i) {
    let subData = {};
    subData['data'] = data;
    subData['index'] = i;
    const dialogRef = this.dialog.open(EditTaskComponent, {
      disableClose: true,
      width: '350px',
      height: '100%',
      position: {
        right: '0',
      },
      data: subData,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.utils.taskList$.next(true);
    });
  }
  deleteModal(data, i) {
    let subData = {};
    subData['data'] = data;
    subData['index'] = i;
    const dialogRef = this.dialog.open(DeleteTaskComponent, {
      disableClose: true,
      data: subData,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.utils.taskList$.next(true);
    });
  }
  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(
      this.inprogresslistDto,
      event.previousIndex,
      event.currentIndex
    );
    console.log(moveItemInArray);
  }
}
