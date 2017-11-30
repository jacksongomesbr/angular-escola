import {Component} from '@angular/core';
import {Disciplina} from './disciplina.model';
import {DisciplinasService} from './disciplinas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editando: any = new Disciplina(null, null, null);
  status_lista = null;
  excluir_ok = false;
  excluir_erro = false;
  salvar_ok = false;
  salvar_erro = false;
  disciplinas = null;

  constructor(private disciplinasService: DisciplinasService) {
    this.atualizarLista();
  }

  atualizarLista() {
    this.disciplinasService.todas()
      .subscribe(disciplinas => {
        this.disciplinas = disciplinas;
        this.status_lista = true;
      }, () => this.status_lista = false);
  }

  salvar() {
    this.disciplinasService.salvar(this.editando.id, this.editando.nome, this.editando.descricao)
      .subscribe(disciplina => {
          this.redefinir();
          this.salvar_ok = true;
          this.atualizarLista();
        },
        () => {
          this.redefinir();
          this.salvar_erro = true;
        }
      );
  }

  excluir(disciplina) {
    if (this.editando.id === disciplina.id) {
      alert('Você não pode excluir uma disciplina que está editando');
    } else {
      if (confirm('Tem certeza que deseja excluir a disciplina "' + disciplina.nome + '"?')) {
        this.disciplinasService.excluir(disciplina)
          .subscribe(() => {
              this.redefinir();
              this.excluir_ok = true;
              this.atualizarLista();
            },
            () => {
              this.redefinir();
              this.excluir_erro = true;
            });
      }
    }
  }

  editar(d) {
    this.redefinir();
    this.disciplinasService.encontrar(d.id)
      .subscribe(disciplina => this.editando = disciplina);
  }

  cancelar() {
    this.redefinir();
  }

  redefinir() {
    this.editando = new Disciplina(null, null, null);
    this.excluir_ok = false;
    this.salvar_ok = false;
    this.excluir_erro = false;
    this.salvar_erro = false;
  }
}
