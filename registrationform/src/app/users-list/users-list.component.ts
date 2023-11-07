import { Component } from '@angular/core';

export interface TableElement {
  name: string;
  position: number;
  surname: string;
  age: number;
}

const Information_DATA: TableElement[] = [
  {position: 1, name: 'Bora',surname: 'Menerja', age:23  },
  {position: 2, name: 'Eni', surname: 'Mnj',age:20},
  {position: 3, name: 'Ina', surname: 'Mnj',age:20},
  {position: 4, name: 'Era', surname: 'Mnj',age:20},
  {position: 5, name: 'Troi',surname: 'Mnj',age:20},

];

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
 
})
// export class UsersListComponent {

// }
export class UsersListComponent {
  displayedColumns: string[] = ['position', 'name', 'surname', 'age'];
  dataSource = Information_DATA;
}
