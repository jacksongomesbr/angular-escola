import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-lista-de-disciplinas',
  templateUrl: './lista-de-disciplinas.component.html',
  styleUrls: ['./lista-de-disciplinas.component.css']
})
export class ListaDeDisciplinasComponent implements OnInit {
  @Input()
  disciplinas = null;

  @Input()
  editando = null;

  @Output()
  onEditar = new EventEmitter<any>();

  @Output()
  onExcluir = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  excluir(disciplina) {
    this.onExcluir.emit(disciplina);
  }

  editar(disciplina) {
    this.onEditar.emit(disciplina);
  }
}
