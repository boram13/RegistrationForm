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
    })
  }

  createUser(user: User) {
    this.users.push(user)
  }
}
