import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DespesaVeiculo, Veiculo } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class DespesasService {


  tipoDespesaUrl: string;
  despesa: string;

  constructor(private http: HttpClient) {
    this.tipoDespesaUrl = `${environment.apiUrl}/tipoDespesa`
    this.despesa = `${environment.apiUrl}/despesa`
   }


  listarTiposDespesa(): Promise<any>{
    return this.http.get<any>(`${this.tipoDespesaUrl}/listarTiposDespesa`).toPromise()
    .then(response => {
      
      return response;
    });;
  }

  listarDespesasPorVeiculo(codigo: Number) {
    return this.http.get<any>(`${this.despesa}/despesaPorVeiculo/${codigo}`).toPromise()
    .then(response => {
          return response;
    });
  }

  salvarDespesa(despesaVeiculo: DespesaVeiculo, veiculo: Veiculo): Promise<any>{

    despesaVeiculo.veiculo = veiculo;

    return this.http.post<DespesaVeiculo>(`${this.despesa}/inserirDespesa`, despesaVeiculo).toPromise()
              .then(resposta => resposta)
  }

}
