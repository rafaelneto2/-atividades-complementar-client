import { Component, OnInit } from '@angular/core';
import { AtividadeService } from '../../service/atividade.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';
import { Atividade } from '../../models/atividade';

@Component({
  selector: 'app-atividades-aluno',
  templateUrl: './atividades-aluno.component.html',
  styleUrls: ['./atividades-aluno.component.scss']
})
export class AtividadesAlunoComponent implements OnInit {

  aluno: any;

  constructor(private atividadeService: AtividadeService,
              private userService: UserService,
              public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUser(this.route.snapshot.params.id);
  }

  private getUser(id: number) {
    this.userService.getUserById(id)
      .subscribe(result => {
          this.aluno = result;
        },
        error => {
          console.log('Error > Get aluno');
        }
      );
  }
}
