import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  profileForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private usersService: UsersService){}
  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      age: new FormControl()
    })
  }
  
  saveUser(form: FormGroup) {
    console.log(form.value)
    console.log(this.usersService.users)
    this.usersService.createUser(form.value)
    console.log(this.usersService.users)
  }
}
