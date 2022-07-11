import { Component, OnInit } from '@angular/core';
import { TipoAtividadeService } from '../../service/tipoAtividade.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tipos-atividade',
  templateUrl: './tipos-atividade.component.html',
  styleUrls: ['./tipos-atividade.component.scss']
})
export class TiposAtividadeComponent implements OnInit {

  closeResult = '';
  tipoatividades: any;
  atividade: any;
  acaoAtividade = '';
  atvNull = {
    nome: '',
    descricao: '',
    limiteHoras: 0
  };

  constructor(private tipoAtividadeService: TipoAtividadeService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getTiposAtividades();
  }

  private getTiposAtividades() {
    this.tipoAtividadeService.getTiposAtividades()
      .subscribe(result => {
          this.tipoatividades = result;
        },
        error => {
          console.log('Error > Busca tipos atividades');
        }
      );
  }

  open(content: any): any {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.getDismissReason(result);
    });
  }

  private getDismissReason(reason: any): any {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else if (reason === 'Save click') {
      this.tipoAtividadeService.novoTipoAtividade(this.atividade)
        .subscribe(result => {
            this.getTiposAtividades();
          },
          error => {
            console.log('Error > Salvar tipos atividades');
          }
        );
    } else if (reason === 'Edit click') {
      this.tipoAtividadeService.editaTipoAtividade(this.atividade.id, this.atividade)
        .subscribe(result => {
            this.getTiposAtividades();
          },
          error => {
            console.log('Error > Editar tipos atividades');
          }
        );
    } else {
      return `with: ${reason}`;
    }
  }

  excluir(id: number): void {
    this.tipoAtividadeService.deleteTipoAtividade(id)
      .subscribe(result => {
          this.getTiposAtividades();
        },
        error => {
          console.log('Error > Delete tipos atividades');
        }
      );
  }
}
