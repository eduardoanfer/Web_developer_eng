class pessoa {
    idade;
    nome;
    constructor(idade,nome){
    this.idade = idade;
    this.nome = nome;
}
}

function compararPessoas(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    }
    else if(p1.idade < p2.idade){
        console.log(`${p1.nome} é mais novo que ${p2.nome}`)
    }
    else{
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`)
    }
}
const eduardo = new pessoa(22,'Eduardo');
const victor = new pessoa(23,'Victor');

compararPessoas(eduardo,victor);