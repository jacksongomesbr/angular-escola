import { Component, OnInit } from '@angular/core';
import { Turma } from '../turma.model';
import { Disciplina } from '../disciplina.model';
import { TurmasService } from '../turmas.service';
import { DisciplinasService } from '../disciplinas.service';

@Component({
  selector: 'app-lista-de-turmas',
  templateUrl: './lista-de-turmas.component.html',
  styleUrls: ['./lista-de-turmas.component.css']
})
export class ListaDeTurmasComponent implements OnInit {
  turmas = [];
  disciplinas = [];
  anos = [];
  q = null;
  filtroPorAno = null;
  filtroPorDisciplina = null;

  constructor(private turmasService: TurmasService, private disciplinasService: DisciplinasService) { }

  ngOnInit() {
    this.turmas = this.turmasService.getTurmas();
    this.disciplinas = this.disciplinasService.getDisciplinas();
    this.anos = [2015, 2016, 2017];
  }

  excluir(turma: Turma) {
    this.turmasService.delete(turma.codigo);
    this.atuarlizarLista();
  }

  removerFiltroPorAno() {
    this.filtroPorAno = null;
    this.atuarlizarLista();
  }

  removerFiltroPorDisciplina() {
    this.filtroPorDisciplina = null;
    this.atuarlizarLista();
  }

  filtrarPorAno(ano: number) {
    this.filtroPorAno = ano;
    this.atuarlizarLista();
  }

  filtrarPorDisciplina(disciplina: string) {
    this.filtroPorDisciplina = disciplina;
    this.atuarlizarLista();
  }

  pesquisar() {
    this.atuarlizarLista();
  }

  atuarlizarLista() {
    this.turmas = this.turmasService.getTurmas(this.q, this.filtroPorDisciplina, this.filtroPorAno);
  }
}
