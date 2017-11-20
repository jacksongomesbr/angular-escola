import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  disciplinas = [
    'Língua Portuguesa',
    'Arte',
    'Educação Física',
    'Matemática',
    'História',
    'Geografia',
    'Ciências',
    'Redação',
    'Língua Estrangeira Moderna - Inglês',
    'Ensino Religioso'
  ];
}
