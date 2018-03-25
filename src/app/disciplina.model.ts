export class Disciplina {
  nome: string;
  id:number;
  cargaHoraria:number;
  data: string;
  isAtivo: boolean;
  tipo: string;
  periodo: number;
  
  constructor(id:number, nome: string,cargaHoraria: number, data: string, isAtivo: boolean, tipo: string, periodo: number) {
    this.id= id;
    this.nome = nome;
    this.cargaHoraria = cargaHoraria;
    this.data = data;
    this.isAtivo = isAtivo;
    this.tipo = tipo;
    this.periodo = periodo;
  }
}
