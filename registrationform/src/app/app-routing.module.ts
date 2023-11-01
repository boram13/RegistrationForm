import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {
    path: 'users', component: UsersListComponent
  },
  {
    path: 'register', component: RegisterUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
