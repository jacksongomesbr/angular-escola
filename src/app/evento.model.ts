export class Evento {
  sigla: string;
  nome: string;
  dataInicio: string;
  dataFim: string;
  cargaHoraria: string;
  submissao: string;
  url: string;

  constructor( sigla: string, nome: string, dataInicio: string, dataFim: string, cargaHoraria: string, submissao: string, url: string) {
    this.sigla = sigla;
    this.nome = nome;
    this.dataInicio = dataInicio;
    this.dataFim = dataFim ;
    this.cargaHoraria = cargaHoraria;
    this.submissao = submissao;
    this.url = url;
  }
}
