import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Categoria } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriaUrl: string;


  constructor(private http: HttpClient) {
    this.categoriaUrl = `${environment.apiUrl}/categoria`

  }

  listarCategoria(): Promise<any> {

     return this.http.get<any>(`${this.categoriaUrl}/listarCategorias`).toPromise()
      .then(response => {
        return response;
      });
    }

    salvar(categoria: Categoria): Promise<Categoria>{
      return this.http.post<Categoria>(`${this.categoriaUrl}`, categoria)
                .toPromise()
                .then(resposta => resposta);
    }
  }