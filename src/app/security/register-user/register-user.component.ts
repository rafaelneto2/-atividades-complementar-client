import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  user: any;
  password: any;
  name: any;
  email: any;
  private tipoUsuario: any;
  private statusUsuario: any;

  constructor(private usuarioService: UserService,
              public route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    if (this.route.snapshot.params.id) {
      this.getUser();
    }
  }

  registar() {
    const user = {
      nome: this.name,
      registroAcademico: this.user,
      email: this.email,
      senha: this.password,
      tipoUsuario: 'ALUNO',
      statusUsuario: 'PENDENTE'
    };
    this.usuarioService.novoUsuario(user)
      .subscribe(result => {
          this.router.navigate(['login']);
        },
        error => {
          console.log('Error > Salvar tipos atividades');
        }
      );
  }

  atualizar() {
    const user = {
      nome: this.name,
      registroAcademico: this.user,
      email: this.email,
      senha: this.password,
      tipoUsuario: this.tipoUsuario,
      statusUsuario: this.statusUsuario
    };
    this.usuarioService.atualizaUsuario(this.route.snapshot.params.id, user)
      .subscribe(result => {
          this.router.navigate(['']);
        },
        error => {
          console.log('Error > Editar tipos atividades');
        }
      );
  }

  private getUser(): void {
    this.usuarioService.getUserById(this.route.snapshot.params.id)
      .subscribe(result => {
          this.user = result.registroAcademico;
          this.name = result.nome;
          this.email = result.email;
          this.tipoUsuario = result.tipoUsuario;
          this.statusUsuario = result.statusUsuario;
        },
        error => {
          console.log('Error > Salvar tipos atividades');
        }
      );
  }
}
