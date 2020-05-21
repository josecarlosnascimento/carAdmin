import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl: string;
  payLoadJwt: any;
  usuarioLogadoEmmiter = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private jwt: JwtHelperService) {
    this.oauthTokenUrl = `${environment.apiUrl}/oauth/token`;
  }

  login(usuario: string, senha: string): Promise<void> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic YW5ndWxhcjpAbmd1bEByMA=='
      }), withCredentials: true
    };

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post<any>(this.oauthTokenUrl, body, httpOptions)
      .toPromise()
      .then(response => {
        this.armazenarToken(response.access_token);
        this.usuarioLogadoEmmiter.emit(true);
      })
      .catch(response => {
        console.log(response.status)
        if (response.status === 400) {
          if (response.error === 'invalid_grant') {
            console.log('Usuario ou senha invalida.')
            return Promise.reject('Usuário ou senha inválida!');
          }
        }
        return Promise.reject(response)
      })

  }

  private armazenarToken(token: string) {
    this.payLoadJwt = this.jwt.decodeToken(token);
    localStorage.setItem('token', token);
  }

  isAccessTokenInvalido() {

    const token = localStorage.getItem('token')

    return !token || this.jwt.isTokenExpired(token)

  }

  obterNovoAccessToken(): Promise<void> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic YW5ndWxhcjpAbmd1bEByMA=='
      }), withCredentials: true
    };
    const body = 'grant_type=refresh_token';

    return this.http.post<any>(this.oauthTokenUrl, body, httpOptions)
      .toPromise()
      .then(response => {
        this.armazenarToken(response.access_token);
        console.log('Novo access token criado');
      }).catch(response => {
        console.log('Erro ao renvoar token', response);
        return Promise.resolve(null)
      })
  }

  temQualquerPemissao(roles) {
    for (const role of roles) {
      if (this.possuiPermissao(role)) {
        return true;
      }
    }

    return false;
  }

  possuiPermissao(permissao: string) {
    return this.payLoadJwt && this.payLoadJwt.authorities.includes(permissao)
  }
}
