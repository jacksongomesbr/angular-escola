import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import {PublicoModule} from './publico/publico.module';
import {AdminModule} from './admin/admin.module';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AdminModule,
    PublicoModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
