export class Disciplina {
  nome: string;
  descricao: string;
  id:number;

  constructor(id:number, nome: string, descricao?: string) {
    this.id= id;
    this.nome = nome;
    this.descricao = descricao;
  }
}
