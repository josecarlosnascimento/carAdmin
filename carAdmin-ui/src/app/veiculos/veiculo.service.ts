import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Veiculo } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  veiculoUrl: string;
  statusUrl: string;

  constructor(private httpClient: HttpClient) {
    this.veiculoUrl = `${environment.apiUrl}/veiculo`
    this.statusUrl = `${environment.apiUrl}/status`
  }

  listarStatus(): Promise<any>{
    return this.httpClient.get<any>(`${this.statusUrl}/listarStatus`).toPromise()
      .then(status => status)
  }

  listarVeiculos(): Promise<any> {
    return this.httpClient.get<any>(`${this.veiculoUrl}/listarVeiculos`).toPromise()
      .then(resposta => resposta)
  }

  salvar(veiculo: Veiculo): Promise<any> {
    return this.httpClient.post<Veiculo>(`${this.veiculoUrl}/insert`, veiculo)
      .toPromise()
      .then(resposta => resposta);
  }

  buscarPorId(codigo: number): Promise<any>{
    return this.httpClient.get<any>(`${this.veiculoUrl}/${codigo}`).toPromise()
    .then(resposta => resposta)
  }
}


