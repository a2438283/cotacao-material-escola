import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cotacao } from '../model/cotacao';
import { RoutesAPI } from './../util/routes-api';
@Injectable({
  providedIn: 'root',
})
export class CotacaoService {
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getById(id: number): Observable<Cotacao> {
    return this.httpClient.get<Cotacao>('${RoutesAPI.COTACOES}/${id}');
  }

  getAll(): Observable<Cotacao[]> {
    return this.httpClient.get<Cotacao[]>(RoutesAPI.COTACOES);
  }

  save(cotacao: Cotacao): Observable<Cotacao> {
    return this.httpClient.post<Cotacao>(
      `${RoutesAPI.COTACOES}`,
      cotacao,
      this.httpOptions
    );
  }

  patch(cotacao: Cotacao): Observable<Cotacao> {
    return this.httpClient.patch<Cotacao>(
      `${RoutesAPI.COTACOES}/${cotacao.id}`,
      JSON.stringify(cotacao),
      this.httpOptions
    );
  }

  update(cotacao: Cotacao): Observable<Cotacao> {
    return this.httpClient.put<Cotacao>(
      `${RoutesAPI.COTACOES}/${cotacao.id}`,
      JSON.stringify(Cotacao),
      this.httpOptions
    );
  }

  delete(cotacao: Cotacao): Observable<any> {
    return this.httpClient.delete(
      `${RoutesAPI.COTACOES}/${cotacao.id}`,
      this.httpOptions
    );
  }
}
