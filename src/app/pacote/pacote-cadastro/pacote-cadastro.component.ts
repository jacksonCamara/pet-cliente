import { Component, OnInit } from '@angular/core';
import { Servico } from '../../servico/servico.model';


@Component({
  selector: 'app-pacote-cadastro',
  templateUrl: './pacote-cadastro.component.html',
  styleUrls: ['./pacote-cadastro.component.css']
})
export class PacoteCadastroComponent implements OnInit {
  public servicos: Servico[] = [{
      "id": 2,
      "descricao": "string",
      "valor": 12,
      "categoriaRaca": "string",
      "tamanho": "string"
  },
  {
      "id": 3,
      "descricao": "string",
      "valor": 12,
      "categoriaRaca": "string",
      "tamanho": "string"
  }]
  constructor() { }

  ngOnInit() {
  }

}
