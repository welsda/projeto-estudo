import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosModule } from './exemplos/exemplos.module';
import { ExerciciosModule } from './exercicios/exercicios.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExemplosModule,
    ExerciciosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
