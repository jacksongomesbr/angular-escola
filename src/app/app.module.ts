import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {ListaDeDisciplinasComponent} from './lista-de-disciplinas/lista-de-disciplinas.component';
import {EditorDeDisciplinaComponent} from './editor-de-disciplina/editor-de-disciplina.component';
import {DisciplinasService} from './disciplinas.service';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
  {path: 'disciplinas', component: ListaDeDisciplinasComponent},
  {path: 'disciplinas/:id', component: EditorDeDisciplinaComponent},
  {path: '', component: HomeComponent,},
  {path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListaDeDisciplinasComponent,
    EditorDeDisciplinaComponent,
    HomeComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DisciplinasService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
