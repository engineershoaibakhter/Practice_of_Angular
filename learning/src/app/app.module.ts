import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { DialogOverviewExampleComponent } from './dialog-overview-example/dialog-overview-example.component';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf, formatDate} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    DialogOverviewExampleComponent,
    DialogOverviewExampleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgIf,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
