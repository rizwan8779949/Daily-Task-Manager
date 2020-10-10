import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from 'src/app/home/task/add-task/add-task.component';
import { UtilsService } from '../../Services/utils/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private utils:UtilsService,private dialog:MatDialog) { }

  ngOnInit(): void {
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
    dialogRef.afterClosed().subscribe((data) => {
      this.utils.taskList$.next(data);
    });
  }
}
