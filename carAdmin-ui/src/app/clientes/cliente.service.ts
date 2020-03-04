import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  clienteUrl: string;
  estadosUrl: string;


  constructor(private http: HttpClient) {
      this.clienteUrl = `${environment.apiUrl}/cliente`
      this.estadosUrl = `${environment.apiUrl}/estado`
   }

  listarClientes(): Promise<any>{
    return this.http.get<any>(`${this.clienteUrl}/listarClientes`).toPromise()
    .then(response => {
      
      return response;
    });;
  }

  listarEstados(): Promise<any>{
    return this.http.get<any>(`${this.estadosUrl}/listarEstados`).toPromise()
    .then(response => {
      
      return response;
    });;
  }

}
