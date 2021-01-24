import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router';

  constructor(
    private translateService: TranslateService
  ) { }

  public setLangRu(): void {
    this.translateService.use('ru');
  }
  public setLangEn(): void {
    this.translateService.use('en');
  }
}
