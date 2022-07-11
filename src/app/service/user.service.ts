import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_API?: string;

  constructor(private http: HttpClient) {
    this.URL_API = `${environment.apiUrl}/usuario`;
  }

  public getUsuariosRole(role: string): Observable<any> {
    return this.http.get(`${this.URL_API}/list/` + role);
  }

  public filterUsuarioRole(role: string, filter: string): Observable<any> {
    return this.http.get(`${this.URL_API}/filtrar/` + role + '/' + filter);
  }

  public getUserById(id: number): Observable<any> {
    return this.http.get(`${this.URL_API}/` + id);
  }

  public novoUsuario(user: any): Observable<any> {
    return this.http.post(`${this.URL_API}/`, user);
  }

  atualizaUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put(`${this.URL_API}/` + id, usuario);
  }

}
