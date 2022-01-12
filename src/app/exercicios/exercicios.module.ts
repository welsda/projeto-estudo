import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './../compartilhado/app-material.module';
import { ExercicioDoisComponent } from './exercicio-dois/exercicio-dois.component';
import { ExercicioUmComponent } from './exercicio-um/exercicio-um.component';
import { ExerciciosRoutingModule } from './exercicios-routing.module';
import { PacientesComponent } from './pacientes/pacientes.component';



@NgModule({
  declarations: [
    ExercicioUmComponent,
    ExercicioDoisComponent,
    PacientesComponent
  ],
  imports: [
    CommonModule,
    ExerciciosRoutingModule,
    AppMaterialModule,
    FormsModule
  ],
  exports: [
    ExercicioUmComponent,
    ExercicioDoisComponent,
    PacientesComponent,
  ]
  //exporta o componente tornando-o visível no app
})
export class ExerciciosModule { }
