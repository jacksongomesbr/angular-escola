import { Component, OnInit } from '@angular/core';
import {DisciplinasService} from "../disciplinas.service";

@Component({
  selector: 'app-lista-de-disciplinas',
  templateUrl: './lista-de-disciplinas.component.html',
  styleUrls: ['./lista-de-disciplinas.component.css']
})
export class ListaDeDisciplinasComponent implements OnInit {
  disciplinas = [];

  constructor(private disciplinasService: DisciplinasService) { }

  ngOnInit() {
    this.disciplinasService.getDisciplinas()
        .subscribe(disciplinas => this.disciplinas = disciplinas);
  }

}
