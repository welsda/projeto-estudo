import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  date = new Date();
  nome = 'José';
  percentual = 0.55745;
  salario = 3000;
  user = { name: 'jr', id: 1 };

  constructor() { }

  ngOnInit(): void {
  }

}

// Exercício Prático

// 1) Crie um componente pacientes dentro de ExerciciosModule.
// 2) Adicionar rota para este componente.
// 3) Criar uma interface para Paciente.
// 4) Criar array de pacientes dentro do componente.
// 5) Mostrar na tela todos dentro de uma tabela.

// Extra 01) Adicione uma ação de deletar o paciente da tabela
// Extra 02) Faça um formulário para cadastrar os pacientes dentro do array.
