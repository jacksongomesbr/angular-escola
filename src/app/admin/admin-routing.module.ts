import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {ListaDeDisciplinasComponent} from './lista-de-disciplinas/lista-de-disciplinas.component';
import {ListaDeTurmasComponent} from './lista-de-turmas/lista-de-turmas.component';
import {DisciplinaComponent} from './disciplina/disciplina.component';
import {TurmaComponent} from './turma/turma.component';
import {CadastroDeDisciplinaComponent} from './cadastro-de-disciplina/cadastro-de-disciplina.component';
import {CadastroDeTurmaComponent} from './cadastro-de-turma/cadastro-de-turma.component';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      {path: 'disciplinas', component: ListaDeDisciplinasComponent},
      {path: 'disciplinas/:id', component: DisciplinaComponent},
      {path: 'disciplinas/:id/novo', component: CadastroDeDisciplinaComponent},
      {path: 'disciplinas/:id/editar', component: CadastroDeDisciplinaComponent},
      {path: 'cadastrar-turma', component: CadastroDeTurmaComponent},
      {path: 'turmas', component: ListaDeTurmasComponent},
      {path: 'turmas/:id', component: TurmaComponent},
      {path: '', component: HomeComponent},
      {path: '**', component: PaginaNaoEncontradaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
