import { Component } from '@angular/core';
import { POKEMONS } from './pokemon/mock-pokemon-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ng-pkemon-app-15';
  pokemons = POKEMONS;
}
