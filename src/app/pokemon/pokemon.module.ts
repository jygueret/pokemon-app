import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { TranslateDirective, TranslateModule } from '@ngx-translate/core';

const pokemonRoutes: Routes = [
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  { path: 'pokemon/edit/:id', component: EditPokemonComponent}
];

@NgModule({
  declarations: [
    PokemonTypeColorPipe,
    PokemonDetailComponent,
    PokemonListComponent,
    PokemonFormComponent,
    EditPokemonComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(pokemonRoutes),TranslateModule.forChild()],
  providers: [PokemonService]
})
export class PokemonModule {}
