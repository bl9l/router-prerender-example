import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LocalizeRouterService} from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router';

  constructor(
    private translateService: TranslateService,
    private localizeRouterService: LocalizeRouterService,
  ) {
    this.localizeRouterService.changeLanguage(translateService.currentLang);
  }

  public setLangRu(): void {
    this.translateService.use('ru');
    this.localizeRouterService.changeLanguage('ru');
  }
  public setLangEn(): void {
    this.translateService.use('en');
    this.localizeRouterService.changeLanguage('en');
  }
}
