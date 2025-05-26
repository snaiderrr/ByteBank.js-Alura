class Cliente{
    nome;
    cpf;
}

class contaCorrente{
    agencia;
    // #saldo = 0
    _saldo = 0;

    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
        }
    }

    depositar(valor){
        if(valor >0 ){
            this.#saldo += valor;
            console.log(this.#saldo);
        }
    }
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;


cliente2.nome = "Alice";
cliente2.cpf = 88822233309;


const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);


