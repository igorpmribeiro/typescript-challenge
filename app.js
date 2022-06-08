// Desafio 1
var employee = {
    code: 10,
    name: "John"
};
employee.code = 10;
employee.name = "John";
// Desafio 2
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
})(Profissao || (Profissao = {}));
var pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz
};
var pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Padeiro
};
var pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
};
var pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
// Desafio 3
var botaoAtualizar = document.getElementById("atualizar-saldo");
var botaoLimpar = document.getElementById("limpar-saldo");
var soma = document.getElementById("soma");
var campoSaldo = document.getElementById("campo-saldo");
var saldoTotal = 0;
limparSaldo();
function somarAoSaldo(soma) {
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
    botaoAtualizar.addEventListener("click", function () {
        somarAoSaldo(Number(soma.value));
    });
}
botaoLimpar.addEventListener("click", function () {
    limparSaldo();
});
