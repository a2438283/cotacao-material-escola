import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getById(id: number): Observable<Produto> {
    return this.httpClient.get<Produto>('${RoutesAPI.PRODUTOS}/${id}');
  }

  getAll(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(RoutesAPI.PRODUTOS);
  }

  save(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(
      `${RoutesAPI.PRODUTOS}`,
      produto,
      this.httpOptions
    );
  }

  patch(produto: Produto): Observable<Produto> {
    return this.httpClient.patch<Produto>(
      `${RoutesAPI.PRODUTOS}/${produto.id}`,
      JSON.stringify(produto),
      this.httpOptions
    );
  }

  update(produto: Produto): Observable<Produto> {
    return this.httpClient.put<Produto>(
      `${RoutesAPI.PRODUTOS}/${produto.id}`,
      JSON.stringify(produto),
      this.httpOptions
    );
  }

  delete(produto: Produto): Observable<any> {
    return this.httpClient.delete(
      `${RoutesAPI.PRODUTOS}/${produto.id}`,
      this.httpOptions
    );
  }
}
