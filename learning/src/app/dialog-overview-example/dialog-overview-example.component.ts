import { DialogOverviewExampleDialogComponent } from './../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import {Component, Inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';



export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog-overview-example.component.html',
  // standalone: true,
  // imports: [
  //   MatFormFieldModule,
  //   MatInputModule,
  //   FormsModule,
  //   MatButtonModule,
  //   NgIf,
  //   MatDialogModule,
  // ],
})
export class DialogOverviewExampleComponent {
  animal: string='';
  name: string='';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}