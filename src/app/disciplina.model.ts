export class Disciplina {
  nome: string;
  descricao: string;

  constructor(nome: string, descricao?: string) {
    this.nome = nome;
    this.descricao = descricao;
  }
}
