import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Observable} from 'rxjs/Observable';
import {zip} from 'rxjs/observable/zip';

@Component({
  selector: 'app-registrar-frequencia',
  templateUrl: './registrar-frequencia.component.html',
  styleUrls: ['./registrar-frequencia.component.css']
})
export class RegistrarFrequenciaComponent implements OnInit {
  turmas = null;
  disciplinas = null;
  professores = null;
  horarios = null;
  alunos = null;
  turma = null;
  disciplina = null;
  professor = null;
  horario = null;
  aluno = null;
  data = null;
  status = 'P';
  status_salvar = null;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.turmas()
      .subscribe(turmas => {
        this.turmas = turmas;
        this.api.disciplinas()
          .subscribe(disciplinas => {
            this.disciplinas = disciplinas;
            this.api.professores()
              .subscribe(professores => {
                this.professores = professores;
                this.api.horarios()
                  .subscribe(horarios => {
                    this.horarios = horarios;
                    this.api.alunos()
                      .subscribe(alunos => {
                        this.alunos = alunos;
                      });
                  });
              });
          });
      });
  }

  limpar() {
    this.turma = null;
    this.disciplina = null;
    this.professor = null;
    this.horario = null;
    this.aluno = null;
    this.data = null;
    this.status = 'P';
  }

  salvar() {
    this.api.cadastrarFrequencia(this.turma, this.disciplina, this.professor,
      this.horario, this.aluno, this.data, this.status)
      .subscribe(
        () => {
          this.status_salvar = true;
          this.limpar();
        },
        () => this.status_salvar = false
      );
  }
}
