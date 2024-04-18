import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesYDirectivasRoutingModule } from './pipes-y-directivas-routing.module';
import { PipesYDirectivasComponent } from './pipes-y-directivas.component';
import { ValidatorPipe } from './validator.pipe';


@NgModule({
  declarations: [
    PipesYDirectivasComponent,
    ValidatorPipe
  ],
  imports: [
    CommonModule,
    PipesYDirectivasRoutingModule
  ],
  exports: [
    PipesYDirectivasComponent,
    ValidatorPipe
  ]
})
export class PipesYDirectivasModule { }
