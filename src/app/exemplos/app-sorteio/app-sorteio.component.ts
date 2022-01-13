import { Component, OnInit } from '@angular/core';
import { SorteioService } from 'src/app/compartilhado/services/sorteio.service';

@Component({
  selector: 'app-app-sorteio',
  templateUrl: './app-sorteio.component.html',
  styleUrls: ['./app-sorteio.component.scss']
})
export class AppSorteioComponent implements OnInit {
  values: string = '';
  sorteado: string = '';

  enviar() {
    const nomes = this.values.split('\n');
    //cada nome na text area, se separado por um enter, gera um \n, portanto
    //é a partir dele que haverá a separação por split.
    this.sorteioService.sortear(nomes).subscribe({
      next: (nome) => (this.sorteado = nome),
      error: (err) => alert(err),
      complete: () => console.log("Observable chegou ao fim.")
    })
  }

  constructor(private sorteioService: SorteioService) { }
  //services são injetados nos construtores

  ngOnInit(): void {
  }

}
