import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ListaDeTurmasComponent } from './lista-de-turmas/lista-de-turmas.component';
import { TurmasService } from './turmas.service';
import { DisciplinasService } from './disciplinas.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';
import { TurmaComponent } from './turma/turma.component';
import { ListaDeDisciplinasComponent } from './lista-de-disciplinas/lista-de-disciplinas.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { CadastroDeDisciplinaComponent } from './cadastro-de-disciplina/cadastro-de-disciplina.component';
import { CadastroDeTurmaComponent } from './cadastro-de-turma/cadastro-de-turma.component';

@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ListaDeTurmasComponent,
        PaginaNaoEncontradaComponent,
        HomeComponent,
        TurmaComponent,
        ListaDeDisciplinasComponent,
        DisciplinaComponent,
        CadastroDeDisciplinaComponent,
        CadastroDeTurmaComponent,
    ],
    providers: [
        TurmasService,
        DisciplinasService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
