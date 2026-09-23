import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio10',
  imports: [],
  templateUrl: './exercicio10.html',
  styleUrl: './exercicio10.css'
})
export class Exercicio10 {
  usuarioLogado = false;

  entrar() {
    this.usuarioLogado = true;
  }

  sair() {
    this.usuarioLogado = false;
  }
}
