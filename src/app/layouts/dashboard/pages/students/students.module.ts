import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentDialogComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    StudentsComponent
  ]
})

export class StudentsModule { }
