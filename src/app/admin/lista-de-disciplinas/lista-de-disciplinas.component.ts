import {Component, OnInit} from '@angular/core';
import {DisciplinasService} from "../disciplinas.service";

@Component({
  selector: 'app-lista-de-disciplinas',
  templateUrl: './lista-de-disciplinas.component.html',
  styleUrls: ['./lista-de-disciplinas.component.css']
})
export class ListaDeDisciplinasComponent implements OnInit {
  excluir_ok = false;
  excluir_erro = false;
  disciplinas = [];

  constructor(private disciplinasService: DisciplinasService) {
  }

  ngOnInit() {
    this.atualizarLista();
  }

  excluir(disciplina) {
    if (confirm('Tem certeza que deseja excluir a disciplina ' + disciplina.nome + '?')) {
      this.disciplinasService.deleteDisciplina(disciplina.id)
        .subscribe(ok => {
          this.excluir_ok = true;
          this.excluir_erro = false;
          this.atualizarLista();
        }, erro => {
          this.excluir_ok = false;
          this.excluir_erro = true;
        });
    }
  }

  atualizarLista() {
    this.disciplinasService.getDisciplinas()
      .subscribe(disciplinas => this.disciplinas = disciplinas);
  }
}
