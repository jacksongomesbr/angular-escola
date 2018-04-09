export class Ocorrencia {
  aluno_matricula: string;
  aluno_nome: string;
  data: string;
  pai_ou_responsavel_compareceu: boolean;
  pai_ou_responsavel_nome: string;
  observacao: string;
  tipo: number;

  constructor(aluno_matricula: string,
              aluno_nome: string,
              data: string,
              pai_ou_responsavel_compareceu: boolean,
              pai_ou_responsavel_nome: string,
              observacao: string,
              tipo: number) {
    this.aluno_matricula = aluno_matricula;
    this.aluno_nome = aluno_nome;
    this.data = data;
    this.pai_ou_responsavel_compareceu = pai_ou_responsavel_compareceu;
    this.pai_ou_responsavel_nome = pai_ou_responsavel_nome;
    this.observacao = observacao;
    this.tipo = tipo;
  }
}
