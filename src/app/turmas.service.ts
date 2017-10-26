import { Injectable } from '@angular/core';
import { Turma } from './turma.model';

@Injectable()
export class TurmasService {
  protected turmas: Array<Turma>;

  constructor() {
    this.turmas = [
      new Turma('001', 'Português', 2017),
      new Turma('002', 'Matemática', 2017),
      new Turma('003', 'Geografia', 2017),
      new Turma('004', 'História', 2017),
      new Turma('005', 'Química', 2017),
      new Turma('006', 'Física', 2017),
      new Turma('007', 'Português', 2016),
      new Turma('008', 'Português', 2015)
    ];
  }

  getTurmas(q?: string, disciplina?: string, ano?: number): Array<Turma> {
    let lista = this.turmas;
    if (q) {
      lista = lista.filter(turma => turma.codigo === q
        || turma.disciplina.indexOf(q) !== -1
        || turma.ano.toString() === q);
    }
    if (disciplina) {
      lista = lista.filter(turma => turma.disciplina === disciplina);
    }
    if (ano) {
      lista = lista.filter(turma => turma.ano === ano);
    }
    return lista;
  }

  getTurmasPorAno(ano: number): Array<Turma> {
    return this.turmas.filter(turma => turma.ano === ano);
  }

  getTurmasPorDisciplina(disciplina: string): Array<Turma> {
    return this.turmas.filter(turma => turma.disciplina === disciplina);
  }

  getTurma(codigo: string): Turma {
    return this.turmas.find(turma => turma.codigo === codigo);
  }

  save(codigo: string, disciplina: string, ano: number) {
    this.turmas.push(new Turma(codigo, disciplina, ano));
  }

  delete(codigo: string) {
    const turma = this.getTurma(codigo);
    const i = this.turmas.indexOf(turma);
    this.turmas.splice(i, 1);
  }
}
