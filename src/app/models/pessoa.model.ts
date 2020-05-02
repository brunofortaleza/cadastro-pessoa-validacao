import { Estado } from "./estado.model";
import { Turma } from "./turma.model";

export class Pessoa {
  constructor(
    public nome: string,
    public dataDeNascimento: Date,
    public sexo: string,
    public cpf: string,
    public email: string,
    public telefone: string,
    public endereco: string,
    public cep: string,
    public estado: Estado,
    public cidade: string,
    public turmas: Array<Turma>,
    public documentosValidados: boolean
  ) {}
}
