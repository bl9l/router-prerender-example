import { TestBed } from '@angular/core/testing';

import { NgxTranslateHelperInterceptor } from './ngx-translate-helper-interceptor.service';

describe('NgxTranlateHelperInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NgxTranslateHelperInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: NgxTranslateHelperInterceptor = TestBed.inject(NgxTranslateHelperInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
