import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CorService {

  corUrl: string;

  constructor(private http: HttpClient) {
    this.corUrl = `${environment.apiUrl}/cor`
  }

  listarCores(): Promise<any> {
    return this.http.get<any>(`${this.corUrl}/listarCores`).toPromise()
     .then(response => {
       return response;
     });
   }
}
