// Desafio 1

let employee = {
  code: 10,
  name: "John",
};

employee.code = 10;
employee.name = "John";

// Desafio 2

enum Profissao {
  Atriz,
  Padeiro,
}

interface Pessoas {
  nome: string;
  idade: number;
  profissao: Profissao;
}

let pessoa1: Pessoas = {
  nome: "Maria",
  idade: 29,
  profissao: Profissao.Atriz,
};

let pessoa2: Pessoas = {
  nome: "Roberto",
  idade: 19,
  profissao: Profissao.Padeiro,
};

let pessoa3: Pessoas = {
  nome: "Laura",
  idade: 32,
  profissao: Profissao.Atriz,
};

let pessoa4: Pessoas = {
  nome: "Carlos",
  idade: 19,
  profissao: Profissao.Padeiro,
};

// Desafio 3

let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo")!;
let soma = document.getElementById("soma")! as HTMLInputElement;
let campoSaldo = document.getElementById("campo-saldo");

let saldoTotal = 0;

limparSaldo();

function somarAoSaldo(soma: number) {
  if (campoSaldo) {
    saldoTotal += soma;
    campoSaldo.innerHTML = saldoTotal.toString();
    limparCampoSoma();
  }
}

function limparCampoSoma() {
  soma.value = "";
}

function limparSaldo() {
  if (campoSaldo) {
    saldoTotal = 0;
    campoSaldo.innerHTML = saldoTotal.toString();
  }
}

if (botaoAtualizar) {
  botaoAtualizar.addEventListener("click", () => {
    somarAoSaldo(Number(soma.value));
  });
}
botaoLimpar.addEventListener("click", () => {
  limparSaldo();
});
