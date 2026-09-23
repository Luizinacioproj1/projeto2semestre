import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Exercicio1 } from './data-binding/exercicio1/exercicio1';
import { Exercicio2 } from './data-binding/exercicio2/exercicio2';
import { Exercicio3 } from './data-binding/exercicio3/exercicio3';
import { Exercicio4 } from './data-binding/exercicio4/exercicio4';
import { Exercicio5 } from './data-binding/exercicio5/exercicio5';
import { Exercicio6 } from './data-binding/exercicio6/exercicio6';
import { Exercicio7 } from './data-binding/exercicio7/exercicio7';
import { Exercicio8 } from './data-binding/exercicio8/exercicio8';
import { Exercicio9 } from './data-binding/exercicio9/exercicio9';
import { Exercicio10 } from './data-binding/exercicio10/exercicio10';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    Exercicio1,
    Exercicio2,
    Exercicio3,
    Exercicio4,
    Exercicio5,
    Exercicio6,
    Exercicio7,
    Exercicio8,
    Exercicio9,
    Exercicio10
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('atividades-angular');
}