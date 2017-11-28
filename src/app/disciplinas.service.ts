import {Injectable} from '@angular/core';
import {Disciplina} from './disciplina.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DisciplinasService {
  private disciplinas = null;
  private novo_id = 1;

  constructor(private http: HttpClient) {
  }

  carregarDados(callback) {
    this.http.get('./assets/dados/disciplinas.json')
      .subscribe(disciplinas => this.disciplinas = disciplinas)
      .add(callback);
  }

  todas(): Array<Disciplina> {
    return this.disciplinas;
  }

  setDisciplinas(disciplinas) {
    this.disciplinas = disciplinas;
  }

  salvar(id: number, nome: string, descricao: string): Disciplina {
    if (id) {
      const d = this.encontrar(id);
      if (d) {
        d.nome = nome;
        d.descricao = descricao;
      } else {
        throw new Error('Não foi possível encontrar a disciplina');
      }
      return d;
    } else {
      const d = new Disciplina(this.novo_id, nome, descricao);
      this.disciplinas.push(d);
      this.novo_id++;
      return d;
    }
  }

  excluir(disciplina: number | Disciplina) {
    let d = null;
    if (typeof(disciplina) === 'number') {
      d = this.encontrar(disciplina);
    } else {
      d = this.encontrar(disciplina.id);
    }
    if (d) {
      const i = this.disciplinas.indexOf(d);
      this.disciplinas.splice(i, 1);
    } else {
      throw new Error('Não foi possível encontrar a disciplina');
    }
  }

  encontrar(arg: number | string) {
    let d = null;
    if (typeof(arg) === 'number') {
      d = this.disciplinas.filter(d => d.id === arg);
    } else {
      d = this.disciplinas.filter(d => d.nome === arg);
    }
    if (d != null && d.length > 0) {
      return d[0];
    } else {
      return null;
    }
  }

}
