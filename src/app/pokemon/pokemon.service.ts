import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {
  constructor(private httpService: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    // return POKEMONS;
    return this.httpService.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => console.table(response)),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.httpService.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => console.log(pokemon)),
      catchError((error) => {
        console.log(error);
        return of(undefined);
      })
    );
  }

  getPorkemonListType(): string[] {
    const typeSet = new Set<string>();
    POKEMONS.forEach((pokemon) => {
      pokemon.types.forEach((type) => typeSet.add(type));
    });
    console.table(typeSet);
    return Array.from(typeSet);
  }

  updatePokemon(pokemon : Pokemon): Observable<Pokemon|undefined> {
    const httpOptions = {
      headers : new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.httpService.put<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((pokemon) => console.log(pokemon)),
      catchError((error) => {
        console.log(error);
        return of(undefined);
      })
    );
  }

  deletePokemonById( pokemonId : number) : Observable<any> {
    return this.httpService.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => {
        console.log(pokemon);
        this.getPokemonList().pipe(
          tap(pokemons => pokemons.filter(pokemon => pokemon.id !== pokemonId))
        )
      }),
      catchError((error) => {
        console.log(error);
        return of(undefined);
      })
    );
  }
}
