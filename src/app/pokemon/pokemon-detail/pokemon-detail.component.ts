import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService : PokemonService) {}

  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId)
      this.pokemon = this.pokemonList.find((p) => p.id == +pokemonId);
  }

  goToPokemonList() {
    this.router.navigateByUrl('pokemons');
  }

  goToEditPokemon(pokemon : Pokemon) {
    this.router.navigate(['pokemon/edit/',pokemon.id]);
  }

  goToDeletePokemon(pokemon : Pokemon) {
    this.pokemonService
      .deletePokemonById(pokemon.id)
      .subscribe(() => console.log(`${pokemon.name} a été supprimé`));
      this.goToPokemonList();
  }
}
