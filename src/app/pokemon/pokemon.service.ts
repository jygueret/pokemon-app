import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Injectable()
export class PokemonService {

  constructor() { }

  getPokemonList() : Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(pokemonId : number) : Pokemon | undefined {
    return POKEMONS.find( pokemon => pokemon.id === pokemonId);
  }

  getPorkemonListType() : string[] {
    const typeSet = new Set<string>;
    POKEMONS.forEach( pokemon => {
      pokemon.types.forEach(type => typeSet.add(type))
    })
    console.table(typeSet);
    return Array.from(typeSet);
  }
  
}
