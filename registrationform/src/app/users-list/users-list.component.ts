import { Component } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, ViewChild} from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmComponent } from '../modals/delete-confirm/delete-confirm.component';
import { Router } from '@angular/router';


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
    private router: Router
    ) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.data = this.usersService.getAllUsers();
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
      if(true){
        this.usersService.removeData(index);
        this.dataSource.data = this.usersService.getAllUsers();
      }
    });
    
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
  
  }



gotoRegisterUser() {
  console.log()
  this.router.navigate(['/register']);
}


}