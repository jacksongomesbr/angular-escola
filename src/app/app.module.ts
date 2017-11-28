import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {ListaDeDisciplinasComponent} from './lista-de-disciplinas/lista-de-disciplinas.component';
import {EditorDeDisciplinaComponent} from './editor-de-disciplina/editor-de-disciplina.component';
import {DisciplinasService} from './disciplinas.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeDisciplinasComponent,
    EditorDeDisciplinaComponent
  ],
  imports: [
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
