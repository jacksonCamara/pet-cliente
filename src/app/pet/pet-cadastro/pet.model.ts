import {Cliente} from './cliente.model';

export class Pet{
    nome: string;
    sexo: string;
    raca: number;
    dataNascimento: string;
    peso: number;
    pelo: number;
    porte: number;
    cliente: Cliente = new Cliente();
}