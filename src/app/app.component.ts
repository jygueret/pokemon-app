import { Component } from '@angular/core';
import { Pokemon } from './pokemon/pokemon';
import { POKEMONS } from './pokemon/mock-pokemon-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ng-pkemon-app-15';
  pokemonList = POKEMONS;
  pokemonSelected!: Pokemon | undefined;
  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  onSelectPokemon(pokemonId: String) {
    const id = +pokemonId;
    const pokemonSelected: Pokemon | undefined = this.pokemonList.find(
      (pok) => pok.id == id
    );
    this.pokemonSelected = pokemonSelected;
    if (pokemonSelected) {
      console.log(`Vous avez cliqué sur le pokémon ${pokemonSelected.name}`);
    } else console.error(`Pas de pôkémon pour l'id ${id}`);
  }
}
