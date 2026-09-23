import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  imports: [],
  templateUrl: './exercicio6.html',
  styleUrl: './exercicio6.css'
})
export class Exercicio6 {
  contador = 0;

  aumentar() {
    this.contador++;
  }

  diminuir() {
    if (this.contador > 0) {
      this.contador--;
    }
  }
}