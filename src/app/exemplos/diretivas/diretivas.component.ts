import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {

  oculto: boolean = false;

  //if

  ocultar() {
    this.oculto = true;
  }

  mostrar() {
    this.oculto = false;
  }

  //for

  alimento: string = '';

  compras = ['Arroz', 'Carne', 'Tempero'];

  add() {
    if(this.alimento.length > 0) { //quantidade de letras
      this.compras.push(this.alimento);
      this.alimento = ''; //p/deixar vazio depois de empurrar para o array
    }
    else {
      alert('Entrada inválida!');
    }
  }

  //switch

  status: string = 'loading'
  // declaração de prompt funciona com tipagem any


  constructor() { }

  ngOnInit(): void {
  }

}
