import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() {
  }

  createUser(item: User) {
    const isData = localStorage.getItem("Users");
    if (isData == null) {
      let newArr = [];
      newArr.push(item);
      localStorage.setItem("Users", JSON.stringify(newArr));
    } else {
      const oldData = JSON.parse(isData);
      oldData.push(item);
      localStorage.setItem("Users", JSON.stringify(oldData))
    }
  }

  getAllUsers(): User[] {
    const localStorageUsers = localStorage.getItem("Users");
    if(localStorageUsers != null) {
      const localData = JSON.parse(localStorageUsers)
      return localData
    } else {
      return []
    }
  }

  removeData(userIndex:number) {
    let elements = this.getAllUsers()
    elements.splice(userIndex,1);
    localStorage.setItem("Users", JSON.stringify(elements));
  }
}
