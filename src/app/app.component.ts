import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './pokemon/mock-pokemon-list';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService,) {
    this.translate.addLangs(['fr', 'en']);
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
  }

  ngOnInit(): void {}
  title = 'ng-pkemon-app-15';
  pokemons = POKEMONS;

  setLanguage(language: string) {
    this.translate.use(language);
  }
}


