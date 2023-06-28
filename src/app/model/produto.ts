export class Produto {
  id: number;
  data: Date;
  constructor(
    public descricao: string,
    public quantidade: number,
    public qtdRegistro: number
  ) {
    this.id = qtdRegistro++;
    this.descricao = descricao;
    this.quantidade = quantidade;
    this.data = new Date();
  }

  public static clone(produto: Produto) {
    let p: Produto = new Produto(
      produto.descricao,
      produto.quantidade,
      produto.id
    );
    p.data = produto.data;
    return p;
  }
  public static toWS(produto: Produto) {
    let p: Produto = new Produto(
      produto.descricao,
      produto.quantidade,
      produto.id
    );
    return p;
  }
}
