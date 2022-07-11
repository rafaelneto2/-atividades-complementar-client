import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {SecurityHttpInterceptor} from './security-http';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

export function tokenGetter(): string {
  return localStorage.getItem('token') as string;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['http://localhost:8080'],
        disallowedRoutes: ['http://localhost:8080/oauth/token']
      }
    }),
    FormsModule,
    MessagesModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityHttpInterceptor,
      multi: true
    }
  ]
})
export class SecurityModule { }
