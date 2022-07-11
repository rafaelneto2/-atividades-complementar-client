import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Atividade } from "../models/atividade";

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  URL_API?: string;

  constructor(private http: HttpClient) {
    this.URL_API = `${environment.apiUrl}/atividade`;
  }

  public novaAtividade(atividade: Atividade): Observable<any> {
    return this.http.post(`${this.URL_API}/`, atividade);
  }

  public getAtividadesUser(id: number): Observable<any> {
    return this.http.get(`${this.URL_API}/` + id);
  }

  deleteAtividade(id: number): Observable<any> {
    return this.http.delete(`${this.URL_API}/` + id);
  }

  editaAtividade(id: number, atividade: any): Observable<any> {
    return this.http.put(`${this.URL_API}/` + id, atividade);
  }
}
