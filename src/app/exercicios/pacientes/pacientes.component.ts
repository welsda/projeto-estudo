import { Pacientes } from './modelos/pacientes';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  listaPacientes: Pacientes[] = [
    { nomePaciente: "James Brown", nascimentoPaciente: "03/05/1933", rgPaciente: "49.874.546-5", cpfPaciente: "489.546.258-4" },
    {nomePaciente: "James Gunn", nascimentoPaciente: "05/08/1966", rgPaciente: "59.874.536-5", cpfPaciente: "589.546.258-4" },
    {nomePaciente: "Sandra Bullock", nascimentoPaciente: "26/07/1964", rgPaciente: "69.874.576-5", cpfPaciente: "689.546.258-4" },
    {nomePaciente: "Jennifer Aniston", nascimentoPaciente: "11/02/1969", rgPaciente: "79.854.546-5", cpfPaciente: "789.546.258-4" },
    {nomePaciente: "Henry Cavill", nascimentoPaciente: "05/05/1983", rgPaciente: "89.874.596-5", cpfPaciente: "889.546.258-4" }
  ];

  visaoColunas: string[] = [ 'nomePaciente', 'nascimentoPaciente', 'rgPaciente', 'cpfPaciente' ];

  id: number = 0;

  deletar(index: number) {
    this.listaPacientes.splice(index, 1);
  }

  adicionar() {

  }

  constructor() { }

  ngOnInit(): void {
  }

}
