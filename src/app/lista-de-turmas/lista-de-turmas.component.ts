import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-lista-de-turmas',
  templateUrl: './lista-de-turmas.component.html',
  styleUrls: ['./lista-de-turmas.component.css']
})
export class ListaDeTurmasComponent implements OnInit {
  turmas = [];

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.turmas()
      .subscribe(turmas => {
        for (let turma of turmas) {
          this.api.professoresNaTurma(turma.id)
            .subscribe(professores => {
              turma.professores = [];
              for (const professor of professores) {
                turma.professores.push(professor.professor.nome);
              }
              turma.professores = turma.professores.join(', ');
            });
          this.api.matriculasNaTurma(turma.id)
            .subscribe(matriculas => {
              turma.quantidade_de_alunos = matriculas.length;
            });
        }
        this.turmas = turmas;
      });
  }

}
