import { Conta } from "./Conta.js";

export class contaCorrente extends Conta{
    static numerodeContas = 0;
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        contaCorrente.numerodeContas += 1;
    }
}