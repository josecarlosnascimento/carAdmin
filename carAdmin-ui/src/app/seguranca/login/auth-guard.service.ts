import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private auth: AuthService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.auth.isAccessTokenInvalido()){
        return this.auth.obterNovoAccessToken()
              .then(() =>{
                if(this.auth.isAccessTokenInvalido()){
                  this.router.navigate(['/login'])
                }
                return true;
              })

      }else  if(next.data.roles && !this.auth.temQualquerPemissao(next.data.roles)){
        this.router.navigate(['/nao-autorizado'])
        return false;
      }

        return true;

  }
}
