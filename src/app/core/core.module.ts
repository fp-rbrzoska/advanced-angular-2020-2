import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { CONFIG_TOKEN } from './tokens';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonsModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    { provide: CONFIG_TOKEN , useValue: { apiUrl: 'http://myapi.com'} }]
})
export class CoreModule { }
