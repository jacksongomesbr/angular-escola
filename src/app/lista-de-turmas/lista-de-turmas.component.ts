import { Component, OnInit } from '@angular/core';
import { Turma } from '../turma.model';
import { TurmasService } from '../turmas.service';

@Component({
  selector: 'app-lista-de-turmas',
  templateUrl: './lista-de-turmas.component.html',
  styleUrls: ['./lista-de-turmas.component.css']
})
export class ListaDeTurmasComponent implements OnInit {
  turmas = [];

  constructor(private turmasService: TurmasService) { }

  ngOnInit() {
    this.turmas = this.turmasService.getTurmas();
  }

  excluir(turma: Turma) {
    this.turmasService.delete(turma.codigo);
  }
}
