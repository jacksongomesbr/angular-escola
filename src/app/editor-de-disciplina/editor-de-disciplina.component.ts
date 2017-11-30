import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Disciplina} from '../disciplina.model';

@Component({
  selector: 'app-editor-de-disciplina',
  templateUrl: './editor-de-disciplina.component.html',
  styleUrls: ['./editor-de-disciplina.component.css']
})
export class EditorDeDisciplinaComponent implements OnInit {
  @Input()
  disciplina = new Disciplina(null, null, null);

  @Output()
  onSalvar = new EventEmitter<any>();

  @Output()
  onCancelar = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  salvar() {
    this.onSalvar.emit(this.disciplina);
  }

  cancelar() {
    this.onCancelar.emit(null);
  }

}
