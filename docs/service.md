# Service (Serviços)

A utilização de **service** é uma prática importante para organização do código e da arquitetura do software. A abordagem é utilizar serviços para implementar **lógica de negócio**, deixando o **controller** responsável por lidar com a **view** (template).

Um serviço é uma classe anotada com `@Injectable`. O primeiro passo é criar uma classe com essa anotação, como demonstra o trecho de código a seguir.

```typescript
import { Injectable } from '@angular/core';
@Injectable()
export class TurmasService {
  constructor() {
  }
}
```

O segundo passo é prover um **service**. Para fazer isso, o **service** deve constar no vetor `providers` do módulo, como mostra o trecho de código, considerando o **service** `TurmasService`:

```typescript
...
import { TurmasService } from './turmas.service';

@NgModule({
    imports: [ ... ],
    declarations: [ ... ],
    providers: [
        TurmasService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

Por fim, o **service** pode ser utilizado em um componente do módulo. Para fazer isso, o **service** `TurmasService` é "injetado" no componente por meio da declaração de um atributo privado no `constructor()`:

```typescript
import { Component, OnInit } from '@angular/core';
import { TurmasService } from '../turmas.service';

@Component({
...
})
export class ListaDeTurmasComponent implements OnInit {
  constructor(private turmasService: TurmasService) { }

  ngOnInit() {
  }
}

```

A partir de então o `TurmasService` pode ser utilizado no componente. Veja os arquivos citados no branch [service](https://github.com/jacksongomesbr/angular-escola/tree/service).