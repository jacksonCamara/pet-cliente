import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-pesquisa',
  templateUrl: './cliente-pesquisa.component.html',
  styleUrls: ['./cliente-pesquisa.component.css']
})
export class ClientePesquisaComponent implements OnInit {

  public clientes: Cliente[] = [];
  public cliente: Cliente = new Cliente();
  private clienteService: ClienteService;



  constructor(clienteService: ClienteService) {
    this.clienteService = clienteService;
    this.list();
  }

  ngOnInit() {
    this.list();
  }


  private list(): void {
    this.clienteService
      .list()
      .subscribe(clientes => {
        this.clientes = clientes;
      }, erro => console.log(erro));
  }

}
