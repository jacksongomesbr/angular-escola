import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-registrar-notas',
  templateUrl: './registrar-notas.component.html',
  styleUrls: ['./registrar-notas.component.css']
})
export class RegistrarNotasComponent implements OnInit {
  turmaId: number = null;
  disciplinaId: number = null;
  alunos = [];
  aluno = null;
  nota1 = null;
  nota2 = null;
  nota3 = null;
  nota4 = null;
  status = null;

  constructor(private api: ApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.turmaId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.disciplinaId = parseInt(this.route.snapshot.paramMap.get('disciplinaId'));
    this.api.matriculasNaTurma(this.turmaId)
      .subscribe(alunos => this.alunos = alunos);
  }

  salvar() {
    this.api.cadastrarNotasDoAluno(this.turmaId, this.disciplinaId,
      this.aluno, this.nota1, this.nota2, this.nota3, this.nota4)
      .subscribe(
        () => this.status = true,
        () => this.status = false
      );
  }
}
