import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared-module/shared.module';
import { TaskRoutingModule } from './task-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { PendingTaskComponent } from './task-list/pending-task/pending-task.component';
import { InprogressTaskComponent } from './task-list/inprogress-task/inprogress-task.component';
import { CompletedTaskComponent } from './task-list/completed-task/completed-task.component';
@NgModule({
  declarations: [
    AddTaskComponent,
    TaskListComponent,
    EditTaskComponent,
    DeleteTaskComponent,
    PendingTaskComponent,
    InprogressTaskComponent,
    CompletedTaskComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TaskRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [],
})
export class TaskModule {}
