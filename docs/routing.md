# Routing

O recurso de navegação do usuário é crucial em aplicações web, ou seja, a habilidade de acessar o conteúdo do software por meio de links. No Angular esse recurso é implementado por meio por de **routing** (rotas).

## Criando um RoutingModule

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

## Definindo as rotas

O segundo passo é definir as rotas, preenchendo o objeto `appRoutes`:

```typescript
...
import { HomeComponent } from './home/home.component';
import { ListaDeTurmasComponent } from './lista-de-turmas/lista-de-turmas.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { TurmaComponent } from './turma/turma.component';

const appRoutes: Routes = [
    { path: 'turmas', component: ListaDeTurmasComponent },
    { path: 'turmas/:codigo', component: TurmaComponent },
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

No caso do código há quatro rotas:

|Caminho|Componente|Comentário|
|----|---------|----------|
|`turmas`|`ListaDeTurmasComponent`|Apresenta a lista de turmas|
|`turmas/:codigo`|`TurmaComponent`|Apresenta os detalhes de uma turma|
|(vazio)|`HomeComponent`|A rota padrão, que apresenta a tela inicial|
|`**`|`PaginaNaoEncontradaComponent`|A rota especial para tratar caminhos não encontrados|

Dessas quatro rotas a segunda (para a tela que mostra os detalhes de uma turma) contém um **parâmetro de rota**. Um parâmetro de rota é uma forma de indicar um valor na URL que será utilizado posteriormente. A sintaxe é iniciar essa parte do caminho com o sinal de dois pontos `:` seguido do nome do parâmetro. Nesse caso, o parâmetro é `codigo` e seu valor será utilizado para indicar para o componente `TurmaComponent` o código da turma que será apresentada.

## Importando o módulo de rotas no módulo raiz

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

## Apresentação dos componentes: o elemento `router-outlet`

Uma parte muito importante desse recurso: o elemento `router-outlet`. Quando eu disse que o Angular apresenta um componente com base no caminho estava falando de algo visual mesmo. Isso significa que um componente será utilizado como "template", ou seja, será o padrão visual do software web e deverá conter um elemento `router-outlet` para permitir que outros componentes possam ser apresentados. A seguir, um trecho de código do **template** do `AppComponent`:

```html
<nav>
...
</nav>

<div id="page" class="container">
    <router-outlet></router-outlet>
</div>
```

Isso significa que os componentes serão apresentados onde estiver o elemento `router-outlet`, ou seja, dentro do elemento `div#page`.

## Criando links para rotas

Links para rotas podem ser criados no **template** ou no **controller**.

### Links no template

A criação de links no template faz uso da propriedade `routerLink`, como no exemplo:

```html
<a routerLink="/turmas">Turmas</a>
```

Nesse caso, a propriedade `routerLink` tem o valor `/turmas`, que indica a criação de um link para a página das turmas. Importante notar que os caminhos começam com `/`, enquanto o mesmo não acontece com o caminho da rota.

Além disso, há as propriedades `routerLinkActive` e `routerLinkActiveOptions`. A primeira indica que uma classe CSS será atribuída ao elemento se a rota estiver ativa. O segundo usa uma estrutura para indicar que a comparação entre o link e o caminho da rota ativa é exata. O código a seguir ilustra como essas propriedades são utilizadas:

```html
<a class="nav-link" routerLink="/turmas" routerLinkActive="active">Turmas</a>
```

### Links no controller

A navegação também pode ser feita diretamente no controller. Para fazer isso, é preciso injetar a classe `Router` no controller e utilizar seu método `navigate()`, como mostra o trecho a seguir:

```typescript
...
import { Router } from '@angular/router';

@Component({
...
})
export class ListaDeTurmasComponent implements OnInit {
  constructor(private turmasService: TurmasService,
    private disciplinasService: DisciplinasService,
    private router: Router) { }

  abrir(turma: Turma) {
    this.router.navigate(['/turmas', turma.codigo]);
  }
}
```

O parâmetro para o método `navigate()` é um array com dois elementos. O primeiro é o link para a rota que mostra os detalhes de uma turma e o segundo é o código da turma (usado como valor para o parâmetro de rota chamado `codigo`).

## Trabalhando com parâmetros de rota

Como já vimos, um parâmetro de rota é uma forma de indicar valores na URL que podem ser utilizados como parâmetros na rota. No caso do software em questão a página que apresenta os detalhes de uma turma pode ser acessada por meio de uma URL como `/turmas/001`. Aqui, o parâmetro de rota `codigo` tem valor `001`. 

A maneira de obter o valor de um parâmetro de rota começa por injetar no controller a classe `ActivatedRoute`, como mostra o trecho a seguir:

```typescript
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TurmasService } from '../turmas.service';
import { Turma } from '../turma.model';

@Component({
...
})
export class TurmaComponent implements OnInit {
  turma: Turma;

  constructor(private turmasService: TurmasService,
    private route: ActivatedRoute,
    private router: Router) { }

}
```

Na sequência um conjunto de objetos é utilizado para dar acesso ao valor do código, como mostra o código do método `ngOnInit()` da mesma classe `TurmaComponent`:

```typescript
ngOnInit() {
    const codigo = this.route.snapshot.paramMap.get('codigo');
    this.turma = this.turmasService.getTurma(codigo);
    if (!this.turma) {
        this.router.navigate(['turma-nao-encontrada']);
    }
}
```

Como você pode perceber o objeto `route` fornece `snapshot.paramMap`. `paramMap`, do tipo `ParamMap`, fornece o método `get()`, que recebe como parâmetro o nome do parâmetro de rota em questão (no caso, `codigo`). A chamada do método `get()` retorna o valor do parâmetro de rota e o atribui a uma variável local do método (`codigo`). Posteriormente, o código utiliza o serviço `TurmasService` para encontrar a turma em questão e trata a situação em que a mesma não existe (não é encontrada), redirecionando para uma *página que não existe*.

Essa é a forma **síncrona** de acessar o valor do parâmetro de rota. 