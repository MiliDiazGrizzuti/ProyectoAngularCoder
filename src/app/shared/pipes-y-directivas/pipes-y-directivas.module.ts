import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesYDirectivasRoutingModule } from './pipes-y-directivas-routing.module';
import { PipesYDirectivasComponent } from './pipes-y-directivas.component';
import { StudentOrderPipe } from './student-order.pipe';


@NgModule({
  declarations: [
    PipesYDirectivasComponent,
    StudentOrderPipe
  ],
  imports: [
    CommonModule,
    PipesYDirectivasRoutingModule
  ],
  exports: [
    PipesYDirectivasComponent,
    StudentOrderPipe
  ]
})
export class PipesYDirectivasModule { }
