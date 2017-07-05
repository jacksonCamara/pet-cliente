import { Component, OnInit } from '@angular/core';
import { Pet } from './pet.model';
import { Raca } from './raca.model';
import { Pelo } from './pelo.model';
import { Cliente } from './cliente.model';



@Component({
  selector: 'app-pet-cadastro',
  templateUrl: './pet-cadastro.component.html',
  styleUrls: ['./pet-cadastro.component.css']
})
export class PetCadastroComponent implements OnInit {
  pet: Pet;


  racas: Raca[] = [{
    id: 1,
    descricao: 'a'
  }, {
    id: 2,
    descricao: 'b'
  }, {
    id: 1,
    descricao: 'a'
  }, {
    id: 1,
    descricao: 'a'
  }]

  pelos: Pelo[] = [{
    id: 1,
    descricao: 'Curto',
  }, {
    id: 2,
    descricao: 'Longo',
  }]

  clientes: Cliente[] = [{
    id: 1,
    nome: 'jackson',
    cpf: '121212'
  }, {
    id: 2,
    nome: 'daiana',
    cpf: '21212'
  }]

  constructor() {
    this.pet = new Pet();
    this.pet.raca = 0;
    this.pet.pelo = 0;
  }

  ngOnInit() {
  }


clienteEscolhido(clienteId: number, clienteNome: string){
  this.pet.cliente.id = clienteId;
  this.pet.cliente.nome = clienteNome;
}

  teste() {
    console.log(this.pet);
  }



}
