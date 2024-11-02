import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  templateUrl:'app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  pokemonList = POKEMONS;
  
  ngOnInit(): void {
    console.table(this.pokemonList)
    //  this.onSelectPokemon(pok);
  }

  onSelectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  }
}
