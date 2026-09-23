import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio8',
  imports: [FormsModule],
  templateUrl: './exercicio8.html',
  styleUrl: './exercicio8.css'
})
export class Exercicio8 {
  produto = '';
  preco = 0;
  quantidade = 0;

  get total(): number {
    return this.preco * this.quantidade;
  }
}