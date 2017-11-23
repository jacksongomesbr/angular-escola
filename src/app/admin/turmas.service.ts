import {Injectable} from '@angular/core';
import {Turma} from './turma.model';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TurmasService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getTurmas(q?: string, disciplina?: number, ano?: number): Observable<Turma[]> {
    let url = this.API_URL + '/turmas';
    if (q) {
      url += '?q=' + q;
    }
    if (disciplina) {
      const d = 'disciplinaId=' + disciplina;
      if (url.indexOf('?') != -1) {
        url += '&' + d;
      } else {
        url += '?' + d;
      }
    }
    if (ano) {
      const a = 'ano=' + ano;
      if (url.indexOf('?') != -1) {
        url += '&' + a;
      } else {
        url += '?' + a;
      }
    }
    if (url.indexOf('?') != -1) {
      url += '&_expand=disciplina';
    } else {
      url += '?_expand=disciplina';
    }
    return this.http.get<Turma[]>(url);
  }

  getTurma(id: number): Observable<Turma> {
    return this.http.get<Turma>(this.API_URL + '/turmas/' + id + '?_expand=disciplina');
  }

  save(codigo: string, disciplinaId: number, ano: number) {
    const turma = {'codigo': codigo, 'disciplinaId': disciplinaId, ano: ano};
    return this.http.post(this.API_URL + '/turmas', turma);
  }

  delete(id: number) {
    return this.http.delete(this.API_URL + '/turmas/' + id);
  }
}
