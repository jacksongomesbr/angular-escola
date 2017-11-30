import {Injectable} from '@angular/core';
import {Disciplina} from './disciplina.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DisciplinasService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  todas() {
    return this.http.get(this.API_URL + '/disciplinas');
  }

  salvar(id: number, nome: string, descricao: string) {
    const disciplina = {nome: nome, descricao: descricao};
    if (id) {
      return this.http.patch(this.API_URL + '/disciplinas/' + id, disciplina);
    } else {
      return this.http.post(this.API_URL + '/disciplinas', disciplina);
    }
  }

  excluir(disciplina: number | Disciplina) {
    let id;
    if (typeof(disciplina) === 'number') {
      id = disciplina;
    } else {
      id = disciplina.id;
    }
    return this.http.delete(this.API_URL + '/disciplinas/' + id);
  }

  encontrar(arg: number) {
    return this.http.get(this.API_URL + '/disciplinas/' + arg);
  }

}
