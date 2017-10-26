import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListaDeTurmasComponent } from './lista-de-turmas/lista-de-turmas.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
    { path: 'turmas', component: ListaDeTurmasComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- apenas para depuração
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
