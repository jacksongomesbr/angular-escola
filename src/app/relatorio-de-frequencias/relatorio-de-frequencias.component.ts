import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-relatorio-de-frequencias',
  templateUrl: './relatorio-de-frequencias.component.html',
  styleUrls: ['./relatorio-de-frequencias.component.css']
})
export class RelatorioDeFrequenciasComponent implements OnInit {
  frequencias = [];
  indice_alunos = [];
  quantidade_faltas = [];
  quantidade_presencas = [];

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.frequencias()
      .subscribe(frequencias => {
        for (const frequencia of frequencias) {
          if (this.indice_alunos.indexOf(frequencia.turmaId + '-' + frequencia.disciplinaId
              + '-' + frequencia.alunoId) === -1) {
            this.frequencias.push(frequencia);
            this.indice_alunos.push(frequencia.turmaId + '-' + frequencia.disciplinaId + '-' + frequencia.alunoId);
            this.quantidade_faltas.push(0);
            this.quantidade_presencas.push(0);
          }
        }
        for (let i = 0; i < this.indice_alunos.length; i++) {
          const vta = this.indice_alunos[i].split('-');
          const turmaId = vta[0];
          const disciplinaId = vta[1];
          const alunoId = vta[2];
          const frequencias_aluno = frequencias.filter(item =>
            item.alunoId === alunoId
            && item.turmaId === turmaId
            && item.disciplinaId === disciplinaId);
          for (let j = 0; j < frequencias_aluno.length; j++) {
            if (frequencias_aluno[j].status === 'P') {
              this.quantidade_presencas[i]++;
            } else {
              this.quantidade_faltas[i]++;
            }
          }
          this.frequencias[i].quantidade_presencas = this.quantidade_presencas[i];
          this.frequencias[i].quantidade_faltas = this.quantidade_faltas[i];
        }
      });
  }

}
