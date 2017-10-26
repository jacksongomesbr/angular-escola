# Routing

O recurso de navegação do usuário é crucial em aplicações web, ou seja, a habilidade de acessar o conteúdo do software por meio de links. No Angular esse recurso é implementado por meio por de **routing** (rotas).

O primeiro passo é criar um módulo para representar as rotas. Nesse caso, vamos observar o arquivo `src/app-routing.module.ts`:

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
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
```

O módulo `AppRoutingModule` é diferente de um módulo tradicional pelo fato de que importa `RouterModule` (importante notar a chamada do método `forRoot()`) e também exporta esse mesmo módulo. Na importação do módulo `RouterModule` é utilizado o método `forRoot()`. Esse método é chamado quando as rotas são utilizadas no módulo raiz do aplicativo Angular. O primeiro parâmetro desse método é o objeto `appRoutes`, do tipo `Routes`, que define as rotas.

O segundo passo é definir as rotas, preenchendo o objeto `appRoutes`:

```typescript
...
import { HomeComponent } from './home/home.component';
import { ListaDeTurmasComponent } from './lista-de-turmas/lista-de-turmas.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
    { path: 'turmas', component: ListaDeTurmasComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
...
})
export class AppRoutingModule { }
```

Na prática o objeto `appRoutes` é um **array** de objetos cujos atributos são:

* `path`: define o caminho que representa a rota
* `component`: define o componente que o Angular vai apresentar quando a rota em questão estiver ativa.

No caso do código há três rotas:

|Caminho|Componente|Comentário|
|----|---------|----------|
|`turmas`|`ListaDeTurmasComponent`|Apresenta a lista de turmas|
|(vazio)|`HomeComponent`|A rota padrão, que apresenta a tela inicial|
|`**`|`PaginaNaoEncontradaComponent`|A rota especial para tratar caminhos não encontrados|

Na sequência, o módulo de rotas deve ser importado no módulo principal (`src/app.module.ts`):

```typescript
...
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        ...
        AppRoutingModule
    ],
    ...
})
export class AppModule {
}
```

Para concluir, uma parte muito importante desse recurso: o elemento `router-outlet`. Quando eu disse que o Angular apresenta um componente com base no caminho estava falando de algo visual mesmo. Isso significa que um componente será utilizado como "template", ou seja, será o padrão visual do software web e deverá conter um elemento `router-outlet` para permitir que outros componentes possam ser apresentados. A seguir, um trecho de código do **template** do `AppComponent`:

```html
<nav>
...
</nav>

<div id="page" class="container">
    <router-outlet></router-outlet>
</div>
```

Isso significa que os componentes serão apresentados onde estiver o elemento `router-outlet`, ou seja, dentro do elemento `div#page`.