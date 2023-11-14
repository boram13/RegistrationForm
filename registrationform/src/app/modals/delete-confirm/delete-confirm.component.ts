import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})

export class DeleteConfirmComponent {
  constructor(public dialog: MatDialog) {}
}

