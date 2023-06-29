export class Produto {
  id: number;
  quantidade: number;

  constructor(public descricao: string) {
    this.id = this.id = Math.round(Math.random() * 1000);
    this.descricao = descricao;
    this.quantidade = 0;
  }

  public static clone(produto: Produto) {
    let p: Produto = new Produto(produto.descricao);
    p.id = produto.id;
    p.quantidade = produto.quantidade;

    return p;
  }
}
