import { Component, OnInit } from '@angular/core';
import { Servico } from '../servico.model';

@Component({
  selector: 'app-servico-pesquisa',
  templateUrl: './servico-pesquisa.component.html',
  styleUrls: ['./servico-pesquisa.component.css']
})
export class ServicoPesquisaComponent implements OnInit {
  public servicos: Servico[] = [{
  "id": 1, 
  "descricao": "string",
  "valor": 12,
  "categoriaRaca": "string",
  "tamanho": "string"
},
{
  "id": 1, 
  "descricao": "string",
  "valor": 12,
  "categoriaRaca": "string",
  "tamanho": "string"
}]
  constructor() { }

  ngOnInit() {
  }

}
