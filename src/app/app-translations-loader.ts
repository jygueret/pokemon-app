import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import * as TranslationsFR from './i18n/fr.json';
import * as TranslationsEN from './i18n/en.json';


interface Translation {
  [key: string]: string | Translation;
}

const TRANSLATIONS: Translation = {
  fr: TranslationsFR
};

export class StaticTranslationLoader implements TranslateLoader {
  public getTranslation(lang: string): Observable<Translation | string> {
    const translation = TRANSLATIONS[lang];
    if (translation) {
      return of(translation);
    } else {
      console.error(`Unknown language: ${lang}`);
      return of({});
    }
  }
}
