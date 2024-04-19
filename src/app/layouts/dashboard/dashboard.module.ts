import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StudentsModule } from './pages/students/students.module';
import { SharedModule } from '../../shared/shared.module';
import { PipesYDirectivasModule } from '../../shared/pipes-y-directivas/pipes-y-directivas.module';
import { ClassesComponent } from './pages/classes/classes.component';
import { CoursesModule } from './pages/courses/courses.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ClassesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    StudentsModule,
    SharedModule,
    PipesYDirectivasModule,
    CoursesModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
