import { Component, OnInit } from "@angular/core";
import { Pessoa } from "./models/pessoa.model";
import { Estado } from "./models/estado.model";
import { Turma } from './models/turma.model';

//H 1:13:18

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  pessoa: Pessoa;
  pessoas: Array<Pessoa>;
  estados: Array<Estado>;
  turmas: Array<Turma>;

  salvar() {
    this.pessoa.dataDeNascimento = this.str2date(this.pessoa.dataDeNascimento.toString());
    this.pessoa.estado = this.estados.find(estado => estado.sigla == this.pessoa.estado.toString());
    this.pessoa.turmas = this.encontrarTurmas(this.pessoa.turmas as any[]);

    this.pessoas.push(this.pessoa);
    this.redefinir();
  }

  encontrarTurmas(numeros: string[]) {
    return this.turmas.filter(turma => numeros.indexOf(turma.numero) != -1);
  }

  //metodo para converter string data para data tipo date.
  str2date(str: string) {
    const a = str.split('T');
    const d = a[0].split('-');
    const y = parseInt(d[0]);
    const m = parseInt(d[1]);
    const dt = parseInt(d[2]);
    return new Date(y, m - 1, dt);
  }

  ngOnInit(): void {
    this.redefinir();
    this.pessoas = [];
    this.estados = [
      new Estado("AC", "Acre"),
      new Estado("GO", "Goiás"),
      new Estado("TO", "Tocantins"),
    ];
    this.turmas = [
      new Turma('0700', 'Linguagem de programação para a web'),
      new Turma('0700', 'Linguagem de programação comercial'),
      new Turma('0700', 'Linguagem de programação orientada a objetos'),
      new Turma('0700', 'Engenharia de software I'),
      new Turma('0700', 'Engenharia de software II')
    ];
  }

  //no TO esta sendo feito uma conversão para o tipo any
  redefinir() {
    this.pessoa = new Pessoa(
      null,
      null,
      "F",
      null,
      null,
      null,
      null,
      null,
      ("TO" as any),
      null,
      [],
      true
    );
  }

  calcularAnos(data: Date | string) {
    let anterior = null;
    const agora = new Date();
    if (!(data instanceof Date)) {
      anterior = new Date(data);
    } else {
      anterior = data;
    }
    return agora.getFullYear() - anterior.getFullYear();
  }
}
