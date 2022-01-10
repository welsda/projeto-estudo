import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DataBindingComponent } from './data-binding/data-binding.component';



@NgModule({
  declarations: [
    DataBindingComponent
  ],
  //componentes de outros recursos do meu módulo
  imports: [
    CommonModule,
    FormsModule
  ],
  //dependências
  exports: [
    DataBindingComponent
  ]
})
export class ExemplosModule { }
