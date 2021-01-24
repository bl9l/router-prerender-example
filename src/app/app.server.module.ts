import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgxTranslateHelperInterceptor} from './ngx-translate-helper-interceptor.service';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NgxTranslateHelperInterceptor, multi: true },
  ]
})
export class AppServerModule {}
