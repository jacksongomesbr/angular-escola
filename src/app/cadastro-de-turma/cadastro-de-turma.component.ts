import {Component, OnInit} from '@angular/core';
import {DisciplinasService} from "../disciplinas.service";
import {TurmasService} from "../turmas.service";

@Component({
  selector: 'app-cadastro-de-turma',
  templateUrl: './cadastro-de-turma.component.html',
  styleUrls: ['./cadastro-de-turma.component.css']
})
export class CadastroDeTurmaComponent implements OnInit {
  disciplinas = null;
  codigo;
  ano;
  disciplina;
  cadastro_ok = false;
  cadastro_erro = false;

  constructor(private disciplinasService: DisciplinasService,
              private turmasService: TurmasService) {
  }

  ngOnInit() {
    this.disciplinasService.getDisciplinas()
      .subscribe(disciplinas => this.disciplinas = disciplinas);
  }

  salvar() {
    this.turmasService.save(this.codigo, parseInt(this.disciplina), this.ano)
      .subscribe(
        turma => {
          this.limpar();
          this.cadastro_ok = true;
        },
        erro => {
          this.cadastro_erro = true;
          this.cadastro_ok = false;
        }
      );
  }

  limpar() {
    this.codigo = null;
    this.ano = null;
    this.disciplina = null;
    this.cadastro_ok = false;
    this.cadastro_erro = false;
  }
}
