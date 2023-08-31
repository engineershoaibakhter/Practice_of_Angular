import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf, formatDate} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DialogData} from '../dialog-overview-example/dialog-overview-example.component'

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.component.html',
  // standalone: true,
  // imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})
export class DialogOverviewExampleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}