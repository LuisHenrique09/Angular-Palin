import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  templateUrl: './palindromo.component.html',
  styleUrls: ['./palindromo.component.css']
})
export class PalindromoComponent {
  texto : string = '';
  

  isPalindromo() : boolean {
    let inverso = this.texto.split('').reverse().join('');
    return this.texto == inverso;
  }

}
