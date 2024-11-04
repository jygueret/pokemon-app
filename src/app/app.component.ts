import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styles: [],
})
export class AppComponent implements OnInit {
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
    } else 
    console.error(`Pas de pôkémon pour l'id ${id}`);
  }
}
