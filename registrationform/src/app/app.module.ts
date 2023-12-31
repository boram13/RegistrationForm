import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ContainerComponent } from './container/container.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule} from '@angular/material/radio';
import { MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule} from '@angular/material/dialog';
import { DeleteConfirmComponent } from './modals/delete-confirm/delete-confirm.component';
import { MatTooltipModule } from '@angular/material/tooltip';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    ContainerComponent,
    RegisterUserComponent,
    UsersListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule,
    MatDialogModule,
    DeleteConfirmComponent,
    MatTooltipModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

