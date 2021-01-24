import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {isPlatformServer} from '@angular/common';

@Injectable()
export class NgxTranslateHelperInterceptor implements HttpInterceptor {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const {index} = request.url.match(/^[\/]?assets/);
    const isAssetsRequest = index === 0;

    // without this replacement in SSR, 'XMLHttpRequest.send' throws the error
    if (isAssetsRequest && isPlatformServer(this.platformId)) {
      const url = 'http://127.0.0.1:4200/' + request.url;
      request = request.clone({ url });
    }

    return next.handle(request);
  }
}
