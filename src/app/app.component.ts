import {Component} from '@angular/core';
import {Disciplina} from './disciplina.model';
import {DisciplinasService} from "./disciplinas.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editando = {id: 0, nome: '', descricao: ''};
  nome = null;
  descricao = null;
  excluir_ok = false;
  excluir_erro = false;
  salvar_ok = false;
  salvar_erro = false;
  disciplinas = null;

  constructor(private disciplinasService: DisciplinasService) {
    this.disciplinas = this.disciplinasService.todas();
  }

  salvar() {
    try {
      const d = this.disciplinasService.salvar(this.editando.id, this.editando.nome, this.editando.descricao);
      this.salvar_ok = true;
      this.editando = {id: 0, nome: '', descricao: ''};
    } catch (e) {
      this.salvar_erro = true;
    }
  }

  excluir(disciplina) {
    if (this.editando === disciplina) {
      alert('Você não pode excluir uma disciplina que está editando');
    } else {
      if (confirm('Tem certeza que deseja excluir a disciplina "'
          + disciplina.nome + '"?')) {
        try {
          this.disciplinasService.excluir(disciplina);
          this.excluir_ok = true;
          this.redefinir();
        } catch (e) {
          this.excluir_erro = true;
        }
      }
    }
  }

  editar(disciplina) {
    this.redefinir();
    this.editando = disciplina;
  }

  cancelar() {
    this.redefinir();
  }

  redefinir() {
    this.editando = {id: 0, nome: '', descricao: ''};
    this.excluir_ok = false;
    this.salvar_ok = false;
    this.excluir_erro = false;
    this.salvar_erro = false;
  }
}
