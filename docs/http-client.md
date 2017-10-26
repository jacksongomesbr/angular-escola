# HttpClient

A classe `HttpClient`, do módulo `@angular/commom/http` fornece uma API para a execução de requisições HTTP. Por meio dela é possível acessar recursos por meio de suas URLs, como arquivos JSON ou consumir uma API REST HTTP.

Para utilizar essa classe o módulo precisa importar `HttpClientModule`, como mostra o trecho a seguir:

```typescript
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        HttpClientModule
    ],
    ...
})
export class AppModule {
}
```

Na sequência, combinando com o conceito de **Service**, a classe `HttpClient` pode ser injetada no serviço:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DisciplinasService {
  constructor(private http: HttpClient) {
  }
}
```

A utilização da classe `HttpClient` dá-se por meio dos métodos que fazem chamadas HTTP e, praticamente, associam-se aos verbos (métodos). Por exemplo, o método `get()` faz uma requisição HTTP GET.

Para exemplificar, o código a seguir ilustra como fazer uma requisição GET:

```typescript
...
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DisciplinasService {

  constructor(private http: HttpClient) {
  }

  getDisciplinas(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>('assets/dados/disciplinas.json');
  }
}
```

O método `DisciplinasService.getDisciplinas()` faz uma chamada para `http.get()` com o objetivo de fazer uma requisição HTTP para o servidor web em uso no momento, solicitando o arquivo que está no caminho `assets/dados/disciplinas.json`. Destaque para duas outras características desse código:

1. o trecho `http.get<Disciplina[]>()` indica que a classe `HttpClient` tentará combinar o conteúdo retornardo com o tipo esperado, ou seja, `Disciplina[]`
2. o trecho `getDisciplinas(): Observable<Disciplina[]>` indica que o tipo do retorno do método é um `Observable`.

A classe `Observable`, disponível em `rxjs/Observable`, é um recurso adicional (não especificamente do Angular) que trata requisições HTTP como assíncronas. Isso quer dizer que, na verdade, a chamada ao método `getDisciplinas()` não realiza, efetivamente, uma requisição HTTP ainda, sendo necessária uma etapa seguinte.

A utilização do serviço `DisciplinasService` é um pouco diferente em relação ao utilizado no branch **service**:

```typescript
ngOnInit() {
    this.disciplinasService.getDisciplinas()
        .subscribe(disciplinas => this.disciplinas = disciplinas);
}
```

A classe `Observable` fornece o método `subscribe()`. Esse método é que, efetivamente, indica para o `HttpClient` que este é o momento de fazer a requisição HTTP. A partir daí o conteúdo retornado da requisição HTTP vista anteriormente (no **service**) estará disponível por meio do parâmetro `disciplinas`. 
