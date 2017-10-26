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
      new Turma('006', 'Física', 2017)
    ];
  }

  getTurmas(): Array<Turma> {
    return this.turmas;
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
