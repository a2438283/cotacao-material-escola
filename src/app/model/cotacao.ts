import { Produto } from './produto';

export class Cotacao {
  id: number;
  produtos: Produto[];
  valorUnitario: number;

  constructor(public descricao: string) {
    this.id = this.id = Math.round(Math.random() * 1000);
    this.descricao = descricao;
    this.valorUnitario = 0;
    this.produtos = [];
  }
}
