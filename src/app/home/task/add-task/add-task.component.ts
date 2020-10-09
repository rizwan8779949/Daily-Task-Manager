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
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  form: FormGroup;
  constructor(
    private api: ApiService,
    private utils: UtilsService,
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private dialogRef: MatDialogRef<AddTaskComponent>
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: [null, Validators.required],
      date: [new Date()],
      decription: [null, Validators.required],
      priority: [null, Validators.required],
    });
  }

  formValid() {
    if (this.form.valid) {
      this.addTask();
    }
  }
  addTask() {
    this.utils.addTaskCondition(this.form);
    this.closeDialog();
    this.snackBarService.success('Add Task Successfully');
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
