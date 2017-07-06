import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css',]
})
export class ClienteCadastroComponent implements OnInit {

  meuForm: FormGroup;
  clienteService: ClienteService;
  route: ActivatedRoute;
  router: Router;
  cliente: Cliente = new Cliente();
  botaoSalvarEditar: string = "Salvar";
  contFone: number = 0;
  contEnd: number = 0;

  constructor(clienteService: ClienteService, fb: FormBuilder, route: ActivatedRoute, router: Router) {

    this.clienteService = clienteService;
    this.route = route;
    this.router = router;
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.botaoSalvarEditar = "Editar"
        this.clienteService.findOne(id).subscribe(cliente => {
          this.cliente = cliente;
          console.log(this.cliente)
        }, erro => console.log(erro));
      }
    });
  }

  ngOnInit() {

  }

  public salvar(): void {
    if (this.botaoSalvarEditar == "Salvar") {
      this.clienteService
        .add(this.cliente)
        .subscribe(resposta => {
          console.log(resposta)
          this.cliente = new Cliente();
        }, erro => console.log(erro));
    } else {
      this.clienteService
        .update(this.cliente)
        .subscribe(resposta => {
          console.log(resposta)
          this.cliente = new Cliente();
        }, erro => console.log(erro));
    }
  }

  adicionarTelefone() {
    this.cliente.telefones.push({ numero: "" })
    for (let t of this.cliente.telefones) {
      //  console.log(t)
    }
  }

  removerTelefone(index: number, last: number) {
    //  console.log("removendo indice" + index);
    this.cliente.telefones.splice(index, 1)
  }

  adicionarEndereco() {
    this.cliente.enderecos.push({
      rua: "",
      numeroResidencia: "",
      bloco: "",
      apartamento: "",
      complemento: "",
      edificio: "",
      bairro: "",
      cep: "",
      cidade: "",
      uf: "",
      pontoReferencia: ""
    })
    for (let t of this.cliente.enderecos) {
      // console.log(t)
    }
  }

  removerEndereco(index: number, last: number) {
    //   console.log("removendo indice" + index);
    this.cliente.enderecos.splice(index, 1)
  }
}

