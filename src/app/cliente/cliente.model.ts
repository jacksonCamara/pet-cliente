import { Telefone } from './telefone.model';
import { Endereco } from './endereco.model';

export class Cliente {
    id: string;
    nome: String;
    cpf: string;
    sexo: string;
    dataNascimento: String;
    telefones: Telefone[] = [{
        valor: "", id: 0
    }];
    enderecos: Endereco[] = [{
        id: 0,
        rua: "",
        numero: "",
        bloco: "",
        apartamento: "",
        complemento: "",
        edificio: "",
        bairro: "",
        cep: "",
        cidade: "",
        uf: "",
        pontoReferencia: ""
    }];
}