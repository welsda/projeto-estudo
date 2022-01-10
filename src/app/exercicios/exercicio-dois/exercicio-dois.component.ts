import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-dois',
  templateUrl: './exercicio-dois.component.html',
  styleUrls: ['./exercicio-dois.component.scss']
})
export class ExercicioDoisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  idade: number = 26;

  aumentar() {
    this.idade++;
  }

  diminuir() {
    this.idade--;
  }
}

// 1) Crie um novo componente dentro do módulo exercicios (exercicio-dois).
// 2) Dentro do componente, crie uma propriedade idade do tipo number. Crie dois botões um para aumentar a idade e outro para diminuir.
// Obs: Colocar ExercicioDoisComponent dentro do exports de exercicios.module
