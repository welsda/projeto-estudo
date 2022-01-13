import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SorteioService {

  constructor() { }

  sortear(nomes: string[]): Observable<string> {
    //pega um array de string e retorna um observable do tipo de dado string
    return new Observable((subscriber) => {
      if(nomes.length === 1) {
        subscriber.error('Lista vazia');
      }
      else {
        const sorteado = Math.floor(Math.random() * nomes.length);
        //random gera numero aleatório de 0 a 1
        //floor torna esse número inteiro arredondando-o pra baixo
        //multiplicado pelo nomes.length, que é o tamnaho do array.
        //ex: numero de 0 a 1 * tamanho 10 (index até 9)
        subscriber.next(nomes[sorteado]);
        subscriber.complete();
      }
    });
  }
}
