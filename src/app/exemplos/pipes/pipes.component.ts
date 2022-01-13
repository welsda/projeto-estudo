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


