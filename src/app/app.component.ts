import {Component} from '@angular/core';
import {Evento} from './evento.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sigla= null;
  nome= null;
  dataInicio= null;
  dataFim= null;
  cargaHoraria= null;
  submissao = null;
  url = null;
  editando = null;
  apresentar = false;
  eventos = [
    new Evento('JIC','Jornada de Iniciação Ciêntífica', '22/02/2014', '25/02/2014', '44h', '10/02/2014', 'www.jic2014.com.br')
  ];

  novo(){
    this.apresentar=true;
  }

  salvar() {
    if (this.editando) {
      this.editando.sigla = this.sigla;
      this.editando.nome = this.nome;
      this.editando.dataInicio = this.dataInicio;
      this.editando.dataFim = this.dataFim ;
      this.editando.cargaHoraria = this.cargaHoraria;
      this.editando.submissao = this.submissao;
      this.editando.url = this.url;
    } else {
      const d = new Evento(this.sigla,this.nome,this.dataInicio,this.dataFim,this.cargaHoraria,this.submissao,this.url);
      this.eventos.push(d);
    }
    this.editando.sigla = null;
    this.editando.nome = null;
    this.editando.dataInicio = null;
    this.editando.dataFim = null;
    this.editando.cargaHoraria = null;
    this.editando.submissao = null;
    this.editando.url = null;
    this.apresentar = null;
  }

  excluir(evento) {
    if (this.editando == evento) {
      alert('Você não pode excluir uma disciplina que está editando');
    } else {
      if (confirm('Tem certeza que deseja excluir a disciplina "'
          + evento.nome + '"?')) {
        const i = this.eventos.indexOf(evento);
        this.eventos.splice(i, 1);
      }
    }
    this.apresentar = false;
  }

  editar(evento) {
    this.apresentar=true;
    this.editando.sigla = evento.sigla;
    this.editando.nome = evento.nome;
    this.editando.dataInicio = this.dataInicio;
    this.editando.dataFim = this.dataFim ;
    this.editando.cargaHoraria = this.cargaHoraria;
    this.editando.submissao = this.submissao;
    this.editando.url = this.url;
  }

  cancelar() {
    this.editando.sigla = null;
    this.editando.nome = null;
    this.editando.dataInicio = null;
    this.editando.dataFim = null;
    this.editando.cargaHoraria = null;
    this.editando.submissao = null;
    this.editando.url = null;
    this.apresentar = null;
  }
}
