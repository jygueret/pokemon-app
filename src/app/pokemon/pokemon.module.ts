import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';

const pokemonRoutes: Routes = [
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent }
];

@NgModule({
  declarations: [
    PokemonTypeColorPipe,
    PokemonDetailComponent,
    PokemonListComponent,
    PokemonFormComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(pokemonRoutes)],
  providers: [PokemonService]
})
export class PokemonModule {}
