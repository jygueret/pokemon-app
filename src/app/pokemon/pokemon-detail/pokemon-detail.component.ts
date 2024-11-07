import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router : Router) {}

  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    console.log(pokemonId);
    if (pokemonId)
      this.pokemon = this.pokemonList.find((p) => p.id == +pokemonId);
  }

  goToPokemonList(){
    this.router.navigateByUrl('pokemons');
  }
}
