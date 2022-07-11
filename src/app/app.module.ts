import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './security/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputMaskModule } from 'primeng/inputmask';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { AuthService } from './security/auth.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { SecurityHttpInterceptor } from './security/security-http';
import { AtividadesAlunoComponent } from './atividades/atividades-aluno/atividades-aluno.component';
import { TiposAtividadeComponent } from './atividades/tipos-atividade/tipos-atividade.component';
import { ListAtividadesComponent } from './components/list-atividades/list-atividades.component';
import { RegisterUserComponent } from './security/register-user/register-user.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NavbarComponent,
        HomeComponent,
        SearchUserComponent,
        AtividadesAlunoComponent,
        TiposAtividadeComponent,
        ListAtividadesComponent,
        RegisterUserComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        RouterModule,
        InputTextModule,
        InputMaskModule,
        ButtonModule,
        RippleModule,
        TableModule,
        HttpClientModule,
        DropdownModule,
        FormsModule,
        BrowserAnimationsModule,
        MessageModule,
        MessagesModule,
        ConfirmDialogModule,
        CalendarModule,
        TooltipModule,
        JwtModule.forRoot({
          config: {
            tokenGetter: () => {
              return '';
            }
          }
        })
    ],
    providers: [
      MessageService,
      ConfirmationService,
      AuthService,
      JwtHelperService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: SecurityHttpInterceptor,
        multi: true
      }
    ],
    exports: [
        NavbarComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
