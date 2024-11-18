import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { POKEMONS } from './pokemon/mock-pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class InMemomryDataService implements InMemoryDbService {

  constructor() { }

   createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    const pokemons = POKEMONS;
    return {pokemons};
  }
}
