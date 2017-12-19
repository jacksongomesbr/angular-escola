import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gerenciar-disciplina',
  templateUrl: './gerenciar-disciplina.component.html',
  styleUrls: ['./gerenciar-disciplina.component.css']
})
export class GerenciarDisciplinaComponent implements OnInit {
  turmaId = null;
  disciplinaId = null;
  turma = null;
  disciplina = null;
  notas = [];
  porcentagem_aprovados = 0;
  porcentagem_reprovados = 0;


  constructor(private api: ApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.turmaId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.disciplinaId = parseInt(this.route.snapshot.paramMap.get('disciplinaId'));
    this.api.getDisciplinaDaTurma(this.turmaId, this.disciplinaId)
      .subscribe(disciplina => this.disciplina = disciplina[0]);
    this.api.getNotasDaDisciplinaNaTurma(this.turmaId, this.disciplinaId)
      .subscribe(notas => {
        this.notas = notas;
        let cont_aprovados = 0;
        let cont_reprovados = 0;
        for (let i = 0; i < notas.length; i++) {
          if (notas[i].situacao_final === 'APROVADO') {
            cont_aprovados++;
          } else {
            cont_reprovados++;
          }
        }
        this.porcentagem_aprovados = cont_aprovados / this.notas.length * 100;
        this.porcentagem_reprovados = cont_reprovados / this.notas.length * 100;
      });
  }

}
