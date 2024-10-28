import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserTable } from '../../Datatypes';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-user-data-dialog',
  standalone: true,
  imports: [MatCardModule, MatButton ],
  templateUrl: './user-data-dialog.component.html',
  styleUrl: './user-data-dialog.component.scss'
})
export class UserDataDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UserDataDialogComponent>,

    @Inject(MAT_DIALOG_DATA) public user: UserTable,
  ) {}
  public closeDialog(): void {
    this.dialogRef.close(); // Schließt das Dialogfenster
  }
}
