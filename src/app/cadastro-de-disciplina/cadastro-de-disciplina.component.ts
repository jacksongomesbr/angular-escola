import {Component, OnInit} from '@angular/core';
import {DisciplinasService} from "../disciplinas.service";

@Component({
  selector: 'app-cadastro-de-disciplina',
  templateUrl: './cadastro-de-disciplina.component.html',
  styleUrls: ['./cadastro-de-disciplina.component.css']
})
export class CadastroDeDisciplinaComponent implements OnInit {
  codigo = null;
  nome = null;
  cadastro_ok = false;
  cadastro_erro = false;

  constructor(private disciplinasService: DisciplinasService) {
  }

  ngOnInit() {

  }

  salvar() {
    this.disciplinasService.addDisciplina(this.codigo, this.nome)
      .subscribe(disciplina => {
          console.log(disciplina);
          this.cadastro_ok = true;
          this.cadastro_erro = false;
        },
        erro => {
          this.cadastro_ok = false;
          this.cadastro_erro = true;
        });
  }

}
