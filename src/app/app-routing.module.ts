import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './security/login/login.component';
import {HomeComponent} from './home/home.component';
import { AtividadesAlunoComponent } from './atividades/atividades-aluno/atividades-aluno.component';
import { TiposAtividadeComponent } from './atividades/tipos-atividade/tipos-atividade.component';
import { RegisterUserComponent } from './security/register-user/register-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrarusuario', component: RegisterUserComponent },
  { path: 'usuario/:id', component: RegisterUserComponent },
  { path: 'tiposatividades', component: TiposAtividadeComponent },
  { path: 'atividades/:id', component: AtividadesAlunoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
