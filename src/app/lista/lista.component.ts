import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  public lista: any[] = [
    {
      descricao: 'teste1',
      quantidade: 10,
      valor: 100,
      id: 1,
    },
    {
      descricao: 'teste2',
      quantidade: 20,
      valor: 200,
      id: 2,
    },
    {
      descricao: 'teste3',
      quantidade: 30,
      valor: 300,
      id: 3,
    },
    {
      descricao: 'teste4',
      quantidade: 40,
      valor: 400,
      id: 4,
    },
  ];
}
