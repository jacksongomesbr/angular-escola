import { Professor } from './professor.model';

export class Disciplina {
  id: number;
  nome: string;
  descricao: string;
  professor: Professor;
  
  constructor(id: number, nome: string, professor: Professor, descricao?: string) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.professor = professor;
  }
}
