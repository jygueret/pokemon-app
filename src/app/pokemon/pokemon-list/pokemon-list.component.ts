import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  pokemonList = POKEMONS;
  pokemonSelected!: Pokemon | undefined;
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  onSelectPokemon(pokemonId: Number) {
    const id = +pokemonId;
    const pokemonSelected: Pokemon | undefined = this.pokemonList.find(
      (pok) => pok.id == id
    );
    this.pokemonSelected = pokemonSelected;
    if (pokemonSelected) {
      console.log(`Vous avez cliqué sur le pokémon ${pokemonSelected.name}`);
      this.router.navigate(['/pokemon',pokemonId]);
    } else console.error(`'Pas de pôkémon pour l'id ${id}`);
  }
}
