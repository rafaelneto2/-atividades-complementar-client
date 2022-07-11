import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl: string;
  jwtPayload: any;

  constructor(private http: HttpClient,
              private jwt: JwtHelperService) {
    this.getToken();
    this.oauthTokenUrl = `http://localhost:8080/oauth/token`;
  }

  login(username: string, password: string): Promise<void> {
    const body = `username=${username}&password=${password}&grant_type=password&client=atv_complementar_client`;
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic YXR2X2NvbXBsZW1lbnRhcl9jbGllbnQ6Y2llbmNpYV9jb21wdXRhY2FvX2lmbWc=');
    return this.http.post<any>(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.decodeToken(response.access_token);
      })
      .catch(response => {
        if (response.status === 400) {
          if (response.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválida!');
          }
        }
        return Promise.reject(response);
      });
  }

  private decodeToken(token: string) {
    this.jwtPayload = this.jwt.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private getToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.decodeToken(token);
    }
  }

  isInvalidAccessToken() {
    const token = localStorage.getItem('token');
    return !token || this.jwt.isTokenExpired(token);
  }

  havePermission(permission: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permission);
  }

  haveAnyPermission(roles: any) {
    for (const role of roles) {
      if (this.havePermission(role)) {
        return true;
      }
    }
    return false;
  }

  getNewAccessToken(): Promise<void> {
    const body = 'grant_type=refresh_token';
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');
    return this.http.post<any>(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.decodeToken(response['access_token']);
        console.log('Novo access token criado!');
      })
      .catch(response => {
        console.error('Erro ao renovar token', response);
        return Promise.reject('Erro ao renovar token');
      });
  }

  cleanAccessToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

}
