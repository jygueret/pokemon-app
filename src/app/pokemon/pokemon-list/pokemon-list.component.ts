import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {

  pokemonList: Pokemon[] = [];
  pokemonSelected: Pokemon | undefined;

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    console.table(this.pokemonList);
    this.pokemonList = this.pokemonService.getPokemonList();
  }

  onSelectPokemon(pokemonId: number) {
    
    this.pokemonSelected = this.pokemonService.getPokemonById(pokemonId);
    if (this.pokemonSelected) {
      console.log(`Vous avez cliqué sur le pokémon ${this.pokemonSelected.name}`);
      this.router.navigate(['/pokemon', this.pokemonSelected.id]);
    } 
    else console.error(`'Pas de pôkémon pour l'id ${pokemonId}`);
  }
}
