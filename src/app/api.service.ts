import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {
  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  turmas(): Observable<any> {
    return this.http.get(this.API_URL + '/turmas');
  }

  getTurma(id: number): Observable<any> {
    return this.http.get(this.API_URL + '/turmas/' + id);
  }

  disciplinas(): Observable<any> {
    return this.http.get(this.API_URL + '/disciplinas');
  }

  getDisciplinasDaTurma(id: number): Observable<any> {
    return this.http.get(this.API_URL + '/professoresNasTurmas?turmaId=' + id + '&_expand=professor&_expand=disciplina');
  }

  professores(): Observable<any> {
    return this.http.get(this.API_URL + '/professors');
  }

  horarios(): Observable<any> {
    return this.http.get(this.API_URL + '/horarios');
  }

  alunos(): Observable<any> {
    return this.http.get(this.API_URL + '/alunos');
  }

  matriculas(): Observable<any> {
    return this.http.get(this.API_URL + '/matriculas');
  }

  matriculasNaTurma(turmaId: number): Observable<any> {
    return this.http.get(this.API_URL + '/matriculas?turmaId=' + turmaId + '&_expand=aluno');
  }

  professoresNaTurma(turmaId: number): Observable<any> {
    return this.http.get(this.API_URL + '/professoresNasTurmas?turmaId=' + turmaId + '&_expand=professor');
  }

  frequencias(): Observable<any> {
    return this.http.get(this.API_URL + '/frequencias?_expand='
      + 'aluno&_expand=professor&_expand=turma&_expand=disciplina&_expand=horario&_sort=turmaId,alunoId');
  }

  cadastrarFrequencia(turmaId: number, disciplinaId: number, professorId: number,
                      horarioId: number, alunoId: number,
                      data: string, status: string) {
    const registro = {
      turmaId: turmaId, disciplinaId: disciplinaId, professorId: professorId,
      horarioId: horarioId, alunoId: alunoId,
      data: data, status: status
    };
    return this.http.post(this.API_URL + '/frequencias', registro);
  }

  cadastrarNotasDoAluno(turmaId: number, disciplinaId: number, alunoId: number,
                        nota1: number, nota2: number, nota3: number, nota4) {
    const media = (nota1 + nota2 + nota3 + nota4) / 4.0;
    const situacao_final = media > 7.0 ? 'APROVADO' : 'REPROVADO';
    const registro = {
      turmaId: turmaId,
      disciplinaId: disciplinaId,
      alunoId: alunoId,
      nota1: nota1,
      nota2: nota2,
      nota3: nota3,
      nota4: nota4,
      media: media,
      situacao_final: situacao_final
    };
    return this.http.post(this.API_URL + '/notas', registro);
  }

  getDisciplinaDaTurma(turmaId: number, disciplinaId: number): Observable<any> {
    return this.http.get(this.API_URL + '/professoresNasTurmas?turmaId=' + turmaId
      + '&disciplinaId=' + disciplinaId
      + '&_expand=turma&_expand=disciplina&_expand=professor');
  }

  getNotasDaDisciplinaNaTurma(turmaId: number, disciplinaId: number): Observable<any> {
    return this.http.get(this.API_URL + '/notas?turmaId=' + turmaId
      + '&disciplinaId=' + disciplinaId + '&_expand=aluno');
  }

  getNotasDoAluno(id: number): Observable<any> {
    return this.http.get(this.API_URL + '/notas?alunoId=' + id
      + '&_expand=aluno&_expand=turma&_expand=disciplina');
  }

  getAluno(id: number): Observable<any> {
    return this.http.get(this.API_URL + '/alunos/' + id);
  }
}
