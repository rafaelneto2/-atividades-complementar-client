import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoAtividadeService {

  URL_API?: string;

  constructor(private http: HttpClient) {
    this.URL_API = `${environment.apiUrl}/tipoatividade`;
  }

  public novoTipoAtividade(atividade: any): Observable<any> {
    return this.http.post(`${this.URL_API}`, atividade);
  }

  public editaTipoAtividade(id: number, atividade: any): Observable<any> {
    return this.http.put(`${this.URL_API}/` + id, atividade);
  }

  public getTiposAtividades(): Observable<any> {
    return this.http.get(`${this.URL_API}`);
  }

  public deleteTipoAtividade(id: number): Observable<any> {
    return this.http.delete(`${this.URL_API}/` + id);
  }

}
