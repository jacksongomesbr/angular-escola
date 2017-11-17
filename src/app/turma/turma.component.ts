import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {TurmasService} from '../turmas.service';
import {Turma} from '../turma.model';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {
  turma: Turma;

  constructor(private turmasService: TurmasService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const codigo = this.route.snapshot.paramMap.get('codigo');
    this.turma = this.turmasService.getTurma(codigo);
    if (!this.turma) {
      this.router.navigate(['turma-nao-encontrada']);
    }
  }

}
