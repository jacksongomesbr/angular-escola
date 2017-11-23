import {Component, OnInit} from '@angular/core';
import {DisciplinasService} from "../disciplinas.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {
  disciplina;

  constructor(private disciplinasService: DisciplinasService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.disciplinasService.getDisciplina(id)
      .subscribe(disciplina => this.disciplina = disciplina);
  }

}
