import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { ApiService } from 'src/app/shared-module/Services/api/api.service';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { SnackBarService } from 'src/app/shared-module/Services/snackBar/snack-bar.service';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.scss'],
})
export class DeleteTaskComponent implements OnInit {
  constructor(
    private api: ApiService,
    private utils: UtilsService,
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private dialogRef: MatDialogRef<DeleteTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}
  pendingTask = new Array();
  inProgressTask = new Array();
  ngOnInit(): void {}
  deleteTask() {
    if (this.data['data'].priority == 'Pending') {
      this.pendingTask = this.utils.getLocalStorage('pendingTask');
      this.pendingTask.splice(this.data['index'], 1);
      localStorage.setItem('pendingTask', JSON.stringify(this.pendingTask));
    } else if (this.data['data'].priority == 'In Progress') {
      this.inProgressTask = this.utils.getLocalStorage('inprogressTask');
      this.inProgressTask.splice(this.data['index'], 1);
      localStorage.setItem(
        'inprogressTask',
        JSON.stringify(this.inProgressTask)
      );
    }
    this.utils.taskList$.next(this.data['data']);
    this.closeDialog();
    this.snackBarService.success('Deleted Task Successfully');
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
