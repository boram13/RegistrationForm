import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = []
  constructor() {
    this.users.push({
      firstName: 'Bora',
      lastName: 'Menerja',
      age: 23,
    },{
      firstName: 'Ledio',
      lastName: 'Menerja',
      age: 18,
    },{
      firstName: 'Leonard',
      lastName: 'Menerja',
      age: 28,
    },{
      firstName: 'Ardit',
      lastName: 'Sinani',
      age: 28,
    })
  }

  createUser(user: User) {
    this.users.push(user)
  }
}
