import { Telefone } from './telefone.model';
import { Endereco } from './endereco.model';

export class Cliente {
    _id: string;
    nome: String = ""
    cpf: string = ""
    sexo: string = ""
    dataNascimento: String = ""
    telefones: Telefone[] = [{
        numero: "", id: 0
    }];
    enderecos: Endereco[] = [{
        id: 0,
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
    }];
}