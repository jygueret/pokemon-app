import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {
  HttpClientInMemoryWebApiModule
} from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { StaticTranslationLoader } from './app-translations-loader';
import { AppComponent } from './app.component';
import { InMemomryDataService } from './in-memomry-data.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: StaticTranslationLoader,
      },
    }),
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemomryDataService, {
      dataEncapsulation: false,
    }),
    PokemonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

