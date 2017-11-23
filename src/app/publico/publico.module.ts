import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PublicoRoutingModule} from './publico-routing.module';
import {LoginComponent} from './login/login.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { PublicoComponent } from './publico/publico.component';
import { LogonService } from './logon.service';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    PublicoRoutingModule,
    SharedModule
  ],
  declarations: [LoginComponent, PublicoComponent],
  providers: [LogonService]
})
export class PublicoModule {
}
