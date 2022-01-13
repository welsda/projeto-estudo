import { Pipe, PipeTransform } from '@angular/core';

//Criar um pipe que ofusca o nome do usuário

@Pipe({
  name: 'obfsEmail'
})
export class ObfsEmailPipe implements PipeTransform {

  transform(email: string) {
    const [user, dominio] = email.split('@');
    //Separa o que esta antes do @ do que está depois
    const initial = user[0]; //primeiro caractere
    const obfs = '*'.repeat(user.length - 1);
    //-1 não conta uma letra da palavra para manter a quantidade de letras
    return `${initial}${obfs}@${dominio}`;
  }

}
