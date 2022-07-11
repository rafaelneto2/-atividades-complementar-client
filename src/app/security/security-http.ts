import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {from, Observable, pipe} from 'rxjs';
import {mergeMap} from 'rxjs/operators';

import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {error} from '@angular/compiler/src/util';

@Injectable()
export class SecurityHttpInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService,
              private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('/api/usuario') && req.method === 'POST') {
      return next.handle(req);
    }
    if (!req.url.includes('/oauth/token')) {
      if (this.auth.isInvalidAccessToken()) {
        from(this.auth.getNewAccessToken())
          .subscribe(() => {
            req = req.clone({
              setHeaders: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              }
            });
          }, error => {
            throw this.router.navigate(['/login']);
          });
      } else {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
      }
    }
    return next.handle(req);
  }
}
