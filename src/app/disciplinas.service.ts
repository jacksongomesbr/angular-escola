import {Injectable} from '@angular/core';
import {Disciplina} from './disciplina.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class DisciplinasService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getDisciplinas(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(this.API_URL + '/disciplinas');
  }

  getDisciplina(id: number): Observable<Disciplina> {
    return this.http.get<Disciplina>(this.API_URL + '/disciplinas/' + id + '?_embed=turmas');
  }

  addDisciplina(codigo: string, nome: string): Observable<any> {
    const disciplina = {codigo: codigo, nome: nome};
    return this.http.post(this.API_URL + '/disciplinas', disciplina);
  }
}
