import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Constants } from 'src/app/util/constants';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { Produto } from '../model/produto';

@Injectable()
export class ProdutoStorageService {
  produtos!: Produto[];
  private produtoSource!: BehaviorSubject<number>;
  constructor() {
    this.produtos = WebStorageUtil.getArray(Constants.PRODUTOS_KEY);

    console.log('------------------------------------------------------');
    console.log(this.produtos);
    console.log('------------------------------------------------------');

    this.produtoSource = new BehaviorSubject<number>(this.produtos.length);
  }

  save(produto: Produto) {
    this.produtos = WebStorageUtil.get(Constants.PRODUTOS_KEY);
    this.produtos.push(produto);
    WebStorageUtil.set(Constants.PRODUTOS_KEY, this.produtos);
  }

  update(produto: Produto) {
    this.produtos = WebStorageUtil.get(Constants.PRODUTOS_KEY);
    this.delete(produto.id);
    this.save(produto);
  }

  delete(value: number): boolean {
    this.produtos = WebStorageUtil.get(Constants.PRODUTOS_KEY);
    this.produtos = this.produtos.filter((p) => {
      return p.id != value;
    });

    WebStorageUtil.set(Constants.PRODUTOS_KEY, this.produtos);
    return true;
  }

  isExist(value: string): boolean {
    this.produtos = WebStorageUtil.get(Constants.PRODUTOS_KEY);
    for (let u of this.produtos) {
      if (u.descricao?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getProdutos(): Produto[] {
    this.produtos = WebStorageUtil.get(Constants.PRODUTOS_KEY);
    return this.produtos;
  }

  asObservable(): Observable<number> {
    console.log('aki kiakaiaki');
    return this.produtoSource;
  }
}
