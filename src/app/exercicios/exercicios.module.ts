import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercicioUmComponent } from './exercicio-um/exercicio-um.component';
import { ExercicioDoisComponent } from './exercicio-dois/exercicio-dois.component';



@NgModule({
  declarations: [
    ExercicioUmComponent,
    ExercicioDoisComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExercicioUmComponent,
    ExercicioDoisComponent
  ]
  //exporta o componente tornando-o visível no app
})
export class ExerciciosModule { }
