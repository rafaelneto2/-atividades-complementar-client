import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  msgs: any[] = [];
  user: any;
  password: any;

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.user, this.password)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch(() => {
        this.msgs = [{severity: 'error', summary: 'Atenção!', detail: 'Usuário ou senha inválida!'}];
        this.user = '';
        this.password = '';
      });
  }

}
