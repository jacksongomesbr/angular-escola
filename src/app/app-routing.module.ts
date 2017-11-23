import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// import {ListaDeTurmasComponent} from './lista-de-turmas/lista-de-turmas.component';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
  // {path: 'cadastrar-disciplina', component: CadastroDeDisciplinaComponent},
  // {path: 'cadastrar-turma', component: CadastroDeTurmaComponent},
  // {path: 'disciplinas', component: ListaDeDisciplinasComponent},
  // {path: 'disciplinas/:id', component: DisciplinaComponent},
  // {path: 'turmas', component: ListaDeTurmasComponent},
  // {path: 'turmas/:id', component: TurmaComponent},
  // {path: '', component: HomeComponent},
  // {path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- apenas para depuração
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
