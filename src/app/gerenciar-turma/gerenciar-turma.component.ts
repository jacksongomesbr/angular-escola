import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gerenciar-turma',
  templateUrl: './gerenciar-turma.component.html',
  styleUrls: ['./gerenciar-turma.component.css']
})
export class GerenciarTurmaComponent implements OnInit {
  turma = null;
  disciplinas = [];

  constructor(private api: ApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.api.getTurma(id)
      .subscribe(turma => this.turma = turma);
    this.api.getDisciplinasDaTurma(id)
      .subscribe(disciplinas => this.disciplinas = disciplinas);
  }

}
