import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Produto } from '../model/produto';
import { RoutesAPI } from './../util/routes-api';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getById(id: number): Promise<Produto> {
    return lastValueFrom(
      this.httpClient.get<Produto>('${RoutesAPI.PRODUTOS}/${id}')
    );
  }

  async getAll(): Promise<Produto[]> {
    return lastValueFrom(this.httpClient.get<Produto[]>(RoutesAPI.PRODUTOS));
  }

  async save(produto: Produto): Promise<Produto> {
    return lastValueFrom(
      this.httpClient.post<Produto>(
        `${RoutesAPI.PRODUTOS}`,
        produto,
        this.httpOptions
      )
    );
  }

  async patch(produto: Produto): Promise<Produto> {
    return lastValueFrom(
      this.httpClient.patch<Produto>(
        `${RoutesAPI.PRODUTOS}/${produto.id}`,
        JSON.stringify(produto),
        this.httpOptions
      )
    );
  }

  async update(produto: Produto): Promise<Produto> {
    return lastValueFrom(
      this.httpClient.put<Produto>(
        `${RoutesAPI.PRODUTOS}/${produto.id}`,
        JSON.stringify(produto),
        this.httpOptions
      )
    );
  }

  async delete(produto: Produto): Promise<any> {
    return lastValueFrom(
      this.httpClient.delete(
        `${RoutesAPI.PRODUTOS}/${produto.id}`,
        this.httpOptions
      )
    );
  }
}
