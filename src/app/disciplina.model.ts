export class Disciplina {
  nome: string;
  descricao: string;
  id:number;
  cargaHoraria:number;

  constructor(id:number, nome: string,cargaHoraria: number, descricao?: string) {
    this.id= id;
    this.nome = nome;
    this.descricao = descricao;
    this.cargaHoraria = cargaHoraria;
  }
}
