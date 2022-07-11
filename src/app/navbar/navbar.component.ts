import { Component, OnInit } from '@angular/core';
import {AuthService} from '../security/auth.service';
import {Router} from '@angular/router';
import {ConfirmationService, PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMenuCollapsed = true;

  constructor(public auth: AuthService,
              private router: Router,
              private confirmationService: ConfirmationService,
              private config: PrimeNGConfig) {
    this.config.setTranslation({
       accept: 'Sim',
       reject: 'Não',
       monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
       monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
       dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
       dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
       dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
       weekHeader: 'Semana',
       today: 'Hoje',
       clear: 'Limpar'
     });
  }

  ngOnInit(): void {
  }

}
