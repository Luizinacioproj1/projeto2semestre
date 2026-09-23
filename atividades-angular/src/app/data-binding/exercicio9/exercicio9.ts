import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio9',
  imports: [CommonModule],
  templateUrl: './exercicio9.html',
  styleUrl: './exercicio9.css'
})
export class Exercicio9 {
  estoque = 10;

  adicionar() {
    this.estoque++;
  }

  remover() {
    if (this.estoque > 0) {
      this.estoque--;
    }
  }
}