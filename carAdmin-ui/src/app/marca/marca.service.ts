import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {


  marcaUrl: string;

  constructor(private http: HttpClient) {
    this.marcaUrl = `${environment.apiUrl}/marca`;
   }

  listarMarcas(): Promise<any>{
    return this.http.get<any>(`${this.marcaUrl}/listarMarcas`).toPromise()
    .then(resultado => {
      return resultado;
    })
  }
}
