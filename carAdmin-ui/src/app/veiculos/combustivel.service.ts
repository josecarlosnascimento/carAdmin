import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CombustivelService {

  combustiveis: string;

  constructor(private httpClient: HttpClient) {
    this.combustiveis = `${environment.apiUrl}/combustivel`
  }

  listarCombustiveis(): Promise<any>{
    return this.httpClient.get<any>(`${this.combustiveis}/listarCombustiveis`).toPromise()
      .then(combustivel => combustivel)
  }
}
