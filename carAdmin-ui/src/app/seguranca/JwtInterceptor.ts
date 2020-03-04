import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class JtwHttpInterceptor implements HttpInterceptor{

  constructor() {}
 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {



      return next.handle(req)
  }
}