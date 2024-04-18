import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesYDirectivasRoutingModule } from './pipes-y-directivas-routing.module';
import { PipesYDirectivasComponent } from './pipes-y-directivas.component';
import { ValidatorPipe } from './validator.pipe';
import { ResaltadoDirective } from './resaltado.directive';


@NgModule({
  declarations: [
    PipesYDirectivasComponent,
    ValidatorPipe,
    ResaltadoDirective
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
