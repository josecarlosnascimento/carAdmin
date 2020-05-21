import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocacaoService {

  locacaoUrl: string;

  constructor(private http: HttpClient) {
    this.locacaoUrl = `${environment.apiUrl}/locacao`
  }
 
  listarLocacaoPorVeiculo(codigo: Number) {
    return this.http.get<any>(`${this.locacaoUrl}/balanco/${codigo}`).toPromise()
    .then(response => {
          return response;
    });
  }

}
