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

  getDisciplinas(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/disciplinas');
  }

  getDisciplina(id: number): Observable<any> {
    return this.http.get(this.API_URL + '/disciplinas/' + id + '?_embed=turmas');
  }

  addDisciplina(codigo: string, nome: string, descricao: string): Observable<any> {
    const disciplina = {codigo: codigo, nome: nome, descricao: descricao};
    return this.http.post(this.API_URL + '/disciplinas', disciplina);
  }

  updateDisciplina(id: number, codigo: string, nome: string, descricao: string): Observable<any> {
    const disciplina = {codigo: codigo, nome: nome, descricao: descricao};
    return this.http.patch(this.API_URL + '/disciplinas/' + id, disciplina);
  }

  deleteDisciplina(id: number) {
    return this.http.delete(this.API_URL + '/disciplinas/' + id);
  }
}
