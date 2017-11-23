/*
A classe Turma descreve a entidade "turma" no contexto da escola.
*/
import {Disciplina} from "./disciplina.model";

export class Turma {
  constructor(public id: number,
              public codigo: string,
              public disciplina: Disciplina,
              public ano: number) {
  }
}
