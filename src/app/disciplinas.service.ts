import { Injectable } from '@angular/core';
import { Disciplina } from './disciplina.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class DisciplinasService {

  constructor(private http: HttpClient) {
  }

  getDisciplinas(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>('assets/dados/disciplinas.json');
  }
}
