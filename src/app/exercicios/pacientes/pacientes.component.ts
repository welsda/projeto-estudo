import { Pacientes } from './modelos/pacientes';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  listaPacientes: Pacientes[] = [
    {nomePaciente: "James Brown", nascimentoPaciente: new Date(1933, 5, 3), rgPaciente: "49.874.546-5", cpfPaciente: "489.546.258-4" },
    {nomePaciente: "James Gunn", nascimentoPaciente: new Date(1966, 8, 5), rgPaciente: "59.874.536-5", cpfPaciente: "589.546.258-4" },
    {nomePaciente: "Sandra Bullock", nascimentoPaciente: new Date(1964, 7, 26), rgPaciente: "69.874.576-5", cpfPaciente: "689.546.258-4" },
    {nomePaciente: "Jennifer Aniston", nascimentoPaciente: new Date(1969, 2, 11), rgPaciente: "79.854.546-5", cpfPaciente: "789.546.258-4" },
    {nomePaciente: "Henry Cavill", nascimentoPaciente: new Date(1983, 5, 5), rgPaciente: "89.874.596-5", cpfPaciente: "889.546.258-4" }
  ];

  visaoColunas: string[] = ['id', 'nomePaciente', 'nascimentoPaciente', 'rgPaciente', 'cpfPaciente', 'acoes' ];

  nomePaciente: string = '';
  nascimentoPaciente?: Date;
  rgPaciente: string = '';
  cpfPaciente: string = '';

  deletar(index: number) {
    this.listaPacientes.splice(index, 1);
  }

  adicionar() {
    this.listaPacientes.push({
      nomePaciente: this.nomePaciente,
      nascimentoPaciente: this.nascimentoPaciente!,
      rgPaciente: this.rgPaciente,
      cpfPaciente: this.cpfPaciente
    });
  }

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
