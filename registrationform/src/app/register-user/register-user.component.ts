import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  profileForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private _snackBar: MatSnackBar,
  
  ){}

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required) 
    });

  }
  
  saveUser(form: FormGroup) {
    console.log(form.value)
    console.log(this.usersService.getAllUsers())
    this.usersService.createUser(form.value)
    console.log(this.usersService.getAllUsers())
    this.profileForm.reset();
    this.showSnackBar();
  
  }
  
  showSnackBar( ){
    this._snackBar.open("User is added ",
    undefined, {duration:2000});
  }
}
