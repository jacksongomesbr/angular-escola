import {Component} from '@angular/core';
import {Disciplina} from './disciplina.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editando = null;
  nome = null;
  id = null;
  cargaHoraria = null;
  apresentar = false;
  data = null;
  isAtivo = null;
  tipo = null;
  periodo = null;

  disciplinas = [
    new Disciplina(1, 'Ciências', 32, '12/03/2018', true, 'principal', 4),
    new Disciplina(2, 'Matemática', 44, '12/03/2020', true, 'secundária', 7)
  ];

  novo(){
    this.apresentar=true;
  }

  total(){
    var i = 0;
    for(let contador of this.disciplinas){
      i = i + contador.cargaHoraria;
    }
    return(i);
  }

  salvar() {
    if (this.editando) {
      this.editando.id = this.id;
      this.editando.nome = this.nome;
      this.editando.cargaHoraria = this.cargaHoraria;
      this.editando.data = this.data;
      this.editando.isAtivo = this.isAtivo;
      this.editando.tipo = this.tipo;
      this.editando.periodo = this.periodo;
    } else {
      const d = new Disciplina(this.id, this.nome, this.cargaHoraria, this.data, this.isAtivo, this.tipo, this.periodo);
      this.disciplinas.push(d);
    }
    this.id = null;
    this.nome = null;
    this.data = null;
    this.isAtivo = null;
    this.tipo = null;
    this.periodo = null;
    this.editando = null;
    this.cargaHoraria = null;
    this.apresentar = false;
  }

  excluir(disciplina) {
    if (this.editando == disciplina) {
      alert('Você não pode excluir uma disciplina que está editando');
    } else {
      if (confirm('Tem certeza que deseja excluir a disciplina "'
          + disciplina.nome + '"?')) {
        const i = this.disciplinas.indexOf(disciplina);
        this.disciplinas.splice(i, 1);
      }
    }
    this.apresentar = false;
  }

  editar(disciplina) {
    this.apresentar= true;
    this.id = disciplina.id;
    this.nome = disciplina.nome;
    this.cargaHoraria = disciplina.cargaHoraria;
    this.data = disciplina.data;
    this.isAtivo = disciplina.isAtivo;
    this.tipo = disciplina.isAtivo;
    this.periodo = disciplina.periodo;
    this.editando = disciplina;
  }

  cancelar() {
    this.id = null;
    this.nome = null;
    this.cargaHoraria = null;
    this.data = null;
    this.isAtivo = null;
    this.tipo = null;
    this.periodo = null;
    this.editando = null;
    this.apresentar = false;
  }
}
