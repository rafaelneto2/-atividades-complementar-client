export class TipoAtividade {

  id?: number;
  nome?: string;
  descricao?: string;
  limiteHoras?: number;

  constructor() {
  }

}

export class Atividade {

  id?: number;
  tipoAtividade?: TipoAtividade;
  qtdHoras?: number;

  constructor() {
  }

}
