import {Component, OnInit} from '@angular/core';
import {Turma} from '../turma.model';
import {Disciplina} from '../disciplina.model';
import {TurmasService} from '../turmas.service';
import {DisciplinasService} from '../disciplinas.service';
import {Router} from '@angular/router';

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
  excluir_ok = false;
  excluir_erro = false;


  constructor(private turmasService: TurmasService,
              private disciplinasService: DisciplinasService,
              private router: Router) {
  }

  ngOnInit() {
    this.disciplinasService.getDisciplinas()
      .subscribe(disciplinas => this.disciplinas = disciplinas);
    this.anos = [2015, 2016, 2017];
    this.atuarlizarLista();
  }

  excluir(turma: Turma) {
    this.turmasService.delete(turma.id)
      .subscribe(ok => {
          this.excluir_ok = true;
          this.excluir_erro = false;
          this.atuarlizarLista();
        },
        erro => {
          this.excluir_ok = false;
          this.excluir_erro = true;
        });
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

  filtrarPorDisciplina(disciplina: number) {
    this.filtroPorDisciplina = disciplina;
    this.atuarlizarLista();
  }

  pesquisar() {
    this.atuarlizarLista();
  }

  atuarlizarLista() {
    this.turmasService.getTurmas(this.q, this.filtroPorDisciplina, this.filtroPorAno)
      .subscribe(turmas => this.turmas = turmas);
  }

  abrir(turma: Turma) {
    this.router.navigate(['admin', 'turmas', turma.id]);
  }
}
