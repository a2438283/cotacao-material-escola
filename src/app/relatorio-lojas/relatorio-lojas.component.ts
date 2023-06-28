import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-relatorio-lojas',
  templateUrl: './relatorio-lojas.component.html',
  styleUrls: ['./relatorio-lojas.component.css'],
})
export class RelatorioLojasComponent implements OnInit {
  lista: any[] = [
    {
      descricao: 'teste11',
      quantidade: 110,
      valor: 48.5,
      loja: 1,
    },
    {
      descricao: 'teste12',
      quantidade: 120,
      valor: 49.02,
      loja: 2,
    },
    {
      descricao: 'teste13',
      quantidade: 130,
      valor: 55.02,
      loja: 3,
    },
    {
      descricao: 'teste14',
      quantidade: 140,
      valor: 60.15,
      loja: 4,
    },
  ];

  item: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let idParam: number = +this.route.snapshot.paramMap.get('id')!;
    let lista = this.lista;

    lista = lista.filter((i) => {
      return i.loja === idParam;
    });

    if (lista.length == 0) {
      alert('Loja não encontrada.');
    }

    this.item = lista[0];
  }
}
