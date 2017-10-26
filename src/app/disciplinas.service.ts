import { Injectable } from '@angular/core';
import { Disciplina } from './disciplina.model';

@Injectable()
export class DisciplinasService {
  disciplinas: Array<Disciplina>;

  constructor() {
    this.disciplinas = [
      new Disciplina('001', 'Português'),
      new Disciplina('002', 'Matemática'),
      new Disciplina('003', 'Geografia'),
      new Disciplina('004', 'História'),
      new Disciplina('005', 'Química'),
      new Disciplina('006', 'Física')
    ];
  }

  getDisciplinas(): Array<Disciplina> {
    return this.disciplinas;
  }
}
