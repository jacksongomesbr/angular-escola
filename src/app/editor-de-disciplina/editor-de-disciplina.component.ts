import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Disciplina} from '../disciplina.model';
import {ActivatedRoute, Router} from '@angular/router';
import {DisciplinasService} from "../disciplinas.service";

@Component({
  selector: 'app-editor-de-disciplina',
  templateUrl: './editor-de-disciplina.component.html',
  styleUrls: ['./editor-de-disciplina.component.css']
})
export class EditorDeDisciplinaComponent implements OnInit {
  disciplina: any = new Disciplina(null, null, null);
  status = 'carregando';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private disciplinasService: DisciplinasService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id == 'cadastrar') {
      this.disciplina = new Disciplina(null, null, null);
      this.status = null;
    } else {
      this.disciplinasService.encontrar(parseInt(id))
        .subscribe(
          disciplina => {
            this.disciplina = disciplina;
            this.status = null;
          },
          erro => {
            if (erro.status == 404) {
              this.router.navigate(['disciplina-nao-encontrada']);
            }
            if (erro.status == 0) {
              this.disciplina = new Disciplina(null, null, null);
              this.status = 'erro-conexao';
            }
          });
    }
  }

  salvar() {
    this.status = 'salvando';
    this.disciplinasService.salvar(this.disciplina.id, this.disciplina.nome, this.disciplina.descricao)
      .subscribe(() => {
          this.status = 'salvo';
          if (this.disciplina.id != this.route.snapshot.paramMap.get('id')) {
            this.disciplina = new Disciplina(null, null, null);
          }
        },
        () => {
          this.status = 'erro';
        });
  }

  cadastrar() {
    this.status = null;
  }

  cancelar() {
    this.router.navigate(['disciplinas']);
  }

}
