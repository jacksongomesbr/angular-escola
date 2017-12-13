import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import {RegistrarFrequenciaComponent} from './registrar-frequencia/registrar-frequencia.component';
import {ApiService} from './api.service';
import {RelatorioDeFrequenciasComponent} from './relatorio-de-frequencias/relatorio-de-frequencias.component';
import {ListaDeTurmasComponent} from './lista-de-turmas/lista-de-turmas.component';

const appRoutes: Routes = [
  {path: 'frequencias/cadastrar', component: RegistrarFrequenciaComponent},
  {path: 'frequencias/relatorio', component: RelatorioDeFrequenciasComponent},
  {path: 'turmas', component: ListaDeTurmasComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginaNaoEncontradaComponent,
    RegistrarFrequenciaComponent,
    RelatorioDeFrequenciasComponent,
    ListaDeTurmasComponent
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
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
