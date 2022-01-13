import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './../compartilhado/app-material.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { ExemplosRoutingModule } from './exemplos-routing.module';
import { PipesComponent } from './pipes/pipes.component';
import { CriacaoPipesComponent } from './criacao-pipes/criacao-pipes.component';
import { AppSorteioComponent } from './app-sorteio/app-sorteio.component';
import { AppGithubComponent } from './app-github/app-github.component';



@NgModule({
  declarations: [
    DataBindingComponent,
    DiretivasComponent,
    PipesComponent,
    CriacaoPipesComponent,
    AppSorteioComponent,
    AppGithubComponent
  ],
  //componentes de outros recursos do meu módulo
  imports: [
    CommonModule,
    FormsModule,
    ExemplosRoutingModule,
    AppMaterialModule
  ],
  //dependências
  exports: [
    DataBindingComponent
  ]
})
export class ExemplosModule { }
