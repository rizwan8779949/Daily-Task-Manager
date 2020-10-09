import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { ApiService } from 'src/app/shared-module/Services/api/api.service';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/shared-module/Services/snackBar/snack-bar.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  form: FormGroup;
  index: number;
  pendingTaskList = new Array();
  completedTaskList = new Array();
  inprogressTaskList = new Array();
  constructor(
    private api: ApiService,
    private utils: UtilsService,
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<EditTaskComponent>
  ) {}
  pendingTask = new Array();
  ngOnInit() {
    this.form = this.formBuilder.group({
      title: [this.data['data'].title, Validators.required],
      date: [new Date(this.data['data'].date)],
      decription: [this.data['data'].decription, Validators.required],
      priority: [this.data['data'].priority, Validators.required],
    });
    this.index = this.data['index'];
  }

  formValid() {
    if (this.form.valid) {
      this.editTask();
    }
  }
  editTask() {
    if (
      this.form.controls.priority.value == this.data['data'].priority &&
      localStorage.getItem('pendingTask') &&
      this.form.controls.priority.value == 'Pending'
    ) {
      this.pendingTask = this.utils.getLocalStorage('pendingTask');
      this.pendingTask[this.index] = this.form.value;
      localStorage.setItem('pendingTask', JSON.stringify(this.pendingTask));
    } else if (localStorage.getItem('pendingTask')) {
      this.pendingTask = this.utils.getLocalStorage('pendingTask');
      this.pendingTask.splice(this.data['index'], 1);
      localStorage.setItem('pendingTask', JSON.stringify(this.pendingTask));
      this.utils.editTaskCondition(this.form);
    }
    this.utils.taskList$.next(this.form.value);
    this.closeDialog();
    this.snackBarService.success('Edit Task Successfully');
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
