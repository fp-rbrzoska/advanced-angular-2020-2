import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(req.headers)
    const newReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + this.auth.token)
    })
    console.log(this.auth.isLoggedIn ? newReq : req)
   return next.handle(this.auth.isLoggedIn ? newReq : req)
  }
}
