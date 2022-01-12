import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: string[], query: string): string[] {
    //o que vai ser recebido do pipe filter, parametros/argumentos determinados para ele
    return data.filter((txt) => txt.toLocaleLowerCase().startsWith(query.toLocaleLowerCase()));
    //transforma tanto o texto no array como o digitado da query em lowercase para comparação
  }
}
