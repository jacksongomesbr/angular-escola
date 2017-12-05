import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {DisciplinasService} from "../disciplinas.service";
import {Disciplina} from "../disciplina.model";

@Component({
  selector: 'app-lista-de-disciplinas',
  templateUrl: './lista-de-disciplinas.component.html',
  styleUrls: ['./lista-de-disciplinas.component.css']
})
export class ListaDeDisciplinasComponent implements OnInit {
  disciplinas = null;
  status = 'carregando';

  constructor(private disciplinasService: DisciplinasService, private router: Router) {
  }

  ngOnInit(): void {
    this.atualizarLista();
  }

  atualizarLista() {
    this.disciplinasService.todas()
      .subscribe(disciplinas => {
        this.disciplinas = disciplinas;
        this.status = null;
      }, erro => {
        if (erro.status == 0) {
          this.status = 'erro-conexao';
        } else {
          this.status = 'erro';
        }
      });
  }

  excluir(disciplina) {
    if (confirm('Tem certeza que deseja excluir a disciplina "' + disciplina.nome + '"?')) {
      this.status = 'excluindo';
      this.disciplinasService.excluir(disciplina)
        .subscribe(() => {
            this.atualizarLista();
            this.status = 'excluir_ok';
          },
          erro => {
            if (erro.status == 0) {
              this.status = 'erro-conexao';
            } else {
              this.status = 'excluir_erro';
            }
          });
    }
  }

  editar(disciplina) {
    this.router.navigate(['disciplinas', disciplina.id]);
  }
}
