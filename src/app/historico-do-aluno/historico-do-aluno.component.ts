import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-historico-do-aluno',
  templateUrl: './historico-do-aluno.component.html',
  styleUrls: ['./historico-do-aluno.component.css']
})
export class HistoricoDoAlunoComponent implements OnInit {
  aluno = null;
  notas = [];
  coeficiente = 0;

  constructor(private api: ApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.api.getAluno(id)
      .subscribe(aluno => this.aluno = aluno);
    this.api.getNotasDoAluno(id)
      .subscribe(notas => {
        this.notas = notas;
        let acumulador = 0;
        for (let i = 0; i < this.notas.length; i++) {
          acumulador += this.notas[i].media;
        }
        this.coeficiente = acumulador / this.notas.length;
      });
  }

}
