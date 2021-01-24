import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {appRoutes, AppRoutes} from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings, ManualParserLoader} from '@gilsdav/ngx-translate-router';
import {Location} from '@angular/common';

// AoT requires an exported function for factories
// tslint:disable-next-line:typedef
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export class MyMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams): string {
    return `WARN: '${params.key}' is missing in '${params.translateService.currentLang}' locale`;
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      missingTranslationHandler: {provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler},
    }),
    AppRoutes,
    LocalizeRouterModule.forRoot(appRoutes, {
      initialNavigation: true,
      parser: {
        provide: LocalizeParser,
        useFactory: (translate, location, settings) =>
          new ManualParserLoader(translate, location, settings, ['en', 'ru']),
        deps: [TranslateService, Location, LocalizeRouterSettings]
      }
    }),
    LocalizeRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
