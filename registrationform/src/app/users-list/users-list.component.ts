import { Component } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, ViewChild} from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmComponent } from '../modals/delete-confirm/delete-confirm.component';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})

export class UsersListComponent implements AfterViewInit {
  displayedColumns: string[] = [ 'firstName', 'lastName', 'age','action'];
  dataSource = new MatTableDataSource();

  
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private usersService: UsersService,
    private dialog: MatDialog,

    ) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.data = this.usersService.items;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
 
  onDelete(element: User, index: number): void {
    
    const dialogRef = this.dialog.open(DeleteConfirmComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.usersService.removeData(index);
    console.log (this.usersService.removeData(index))
    this.dataSource.data = this.usersService.items;

}
  
  }
  


