import { Conta } from "./Conta.js";

export class contaCorrente extends Conta{
    static numerodeContas = 0;
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        contaCorrente.numerodeContas += 1;
    }


    sacar(valor) {

        
        let taxa = 1.1;
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }
}