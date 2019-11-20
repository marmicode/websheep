import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PrependBaseUrlInterceptor } from './prepend-base-url.interceptor';
import { AuthInterceptor } from './auth.interceptor';

@NgModule()
export class HttpInterceptorsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HttpInterceptorsModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: PrependBaseUrlInterceptor,
          multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        }
      ]
    }
  }
}