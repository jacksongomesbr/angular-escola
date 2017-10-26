import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaDeTurmasComponent } from './lista-de-turmas/lista-de-turmas.component';
import { TurmasService } from './turmas.service';
import { DisciplinasService } from './disciplinas.service';

@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        ListaDeTurmasComponent,
    ],
    providers: [
        TurmasService,
        DisciplinasService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
