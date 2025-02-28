const player01= {
    nome:"Mario",
    velocidade:4,
    manobrabilidade:3,
    poder:3,
};

const player02= {
    nome:"Luigi",
    velocidade:3,
    manobrabilidade:4,
    poder:4,
};

const player03= {
    nome:"Peach",
    velocidade:2,
    manobrabilidade:2,
    poder:4,
};

const player04= {
    nome:"Browser",
    velocidade:2,
    manobrabilidade:2,
    poder:4,
};
const player05= {
    nome:"Yoshi",
    velocidade:2,
    manobrabilidade:2,
    poder:4,
};
const player06= {
    nome:"Donkey Kong",
    velocidade:2,
    manobrabilidade:2,
    poder:4,
};
function rollDice(){ 
    return Math.floor(Math.random() * 6 )+ 1; // 1 a 6 uma funcao que rola o dado e retorna o valor de 1 a 6 . // o node normalmente é sincrono (tudo ao mesmo tempo) async -> assincrono
 }
  // pegar um bloco aleatorio
async function getRandonBlock(){
    let random = Math.random(); // 0 a 1
    let result
    // sempre dentro eu tenho que passar um valor boleano
    switch (true) {
        case random < 0.33 :
        result = "reta";
        break;
        case random < 0.66 :
        result = "curva";
        break;// sempre coloquei um comando break
        default:
        result = "confronto";
        break;
    }
    return result;// retorna o valor
}

async function logRolResult(characteName,block,diceResult, attribute){
    console.log(`🎲 ${characteName} rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute} \n`);
}
// attribute seria o valor da habilidade que ele tem pronta. 





// funcao que recebe parametros
async function playRaceEngine(character1, character2){
    for (let round =1; round <= 5; round++){
        console.log(` 🏁 Round ${round} \n `);
        
        let block  = await getRandonBlock();  // await -> espera a funcao getRandonBlock terminar para continuar
        console.log(`Bloco: ${block} \n`);
        let diceResult1 = await rollDice(); // await -> espera a funcao rollDice terminar para continuar ------ chamo o rool para sortear tambem dse 1 a 6
        let diceResult2 = await rollDice(); // await -> espera a funcao rollDice terminar para continuar  ------ alt + shift + seta para baixo copia a linha


        //teste de habilidade 
        let totalTestSkill1= 0; //vao guardar o valor do dado mais o valor da habilidade e dar o total
        let totalTestSkill2= 0;// camion case organizacao de codigo

    
        if(block === "reta"){
            totalTestSkill1 = diceResult1 + character1.velocidade;// totalTestSkill1 = 0 + 4
            totalTestSkill2 = diceResult2 + character2.velocidade;// totalTestSkill2 = 0 + 3
            await logRolResult(character1.nome,"velocidade",diceResult1, character1.velocidade); // espera a funcao logRolResult terminar para continuar e pediu o tipo de bloco
            await logRolResult(character2.nome,"velocidade",diceResult1, character2.velocidade); // espera a funcao logRolResult terminar para continuar e pediu o tipo de bloco
            
            
        }
        if(block === "curva"){
            totalTestSkill1 = diceResult1 + character1.manobrabilidade;// totalTestSkill1 = 0 + 3
            totalTestSkill2 = diceResult1 + character2.manobrabilidade;// totalTestSkill2 = 0 + 4
            await logRolResult(character1.nome,"manobrabilidade",diceResult1, character1.manobrabilidade); // espera a funcao logRolResult terminar para continuar e pediu o tipo de bloco
            await logRolResult(character2.nome,"manobrabilidade",diceResult1, character2.manobrabilidade); // espera a funcao logRolResult terminar para continuar e pediu o tipo de bloco
        }
        if(block === "confronto"){
            let powerResult1 = diceResult1 + character1.poder;
            let powerResult2= diceResult2 + character2.poder;
            console.log(`${character1.nome} confrontou com ${character2.nome} \n 🥊`);
            await logRolResult(character1.nome,"poder",diceResult1, character1.poder); // espera a funcao logRolResult terminar para continuar e pediu o tipo de bloco
            await logRolResult(character2.nome,"poder",diceResult1, character2.poder); // espera a funcao logRolResult terminar para continuar e pediu o tipo de bloco
            
            if (powerResult1 > powerResult1 && character2.pontos > 0){
                console.log(`${character1.nome} venceu o confronto! ${character2.nome} perdeu 1 ponto! 🐢  `);
                character2.pontos --;
            }
            if (powerResult2 > powerResult1 && character1.pontos > 0){
                console.log(`${character2.nome} venceu o confronto! ${character1.nome} perdeu 1 ponto! 🐢  `)
                character1.pontos --;
            }
            
           // character1.pontos-= powerResult1 > powerResult2 && character2.pontos > 0 ? 1 : 0; // se o poder do personagem 1 for maior que o poder do personagem 2 e o personagem 2 tiver pontos ele perde 1 ponto
           // character2.pontos-= powerResult2 > powerResult1 && character1.pontos > 0 ? 1 : 0; //o ? é um if ternario que vai fazer a verificacao 
            
            console.log(powerResult1 === powerResult2 ? "🤝 Empate! Nenhum ponto foi perdido": ""); // se não eu não exibo nada ""- vazio 
        
        
        
        }
        // quem ganhou o round - Verificando vencedor 
        
         
        if(totalTestSkill1 > totalTestSkill2){
            console.log(` 🏆 O  ${character1.nome} marcou um ponto! `)
            character1.pontos++; // 1 ponto para o personagem 1
        }else if(totalTestSkill2>totalTestSkill1){
            console.log(` 🏆 O  ${character2.nome} marcou um ponto! `)
            character2.pontos ++; // 1 ponto para o personagem 1
           
        } console.log("____________________________________________________")
    
    }
}    
// escopo de variaveis e consantantes (let e const)
// funcoes que nao recebem parametros



// funcoes que recebe parametros
 (async function main(){
    console.log(
        `🏁 Corrida entre ${player01.nome} e ${player02.nome} começando... \n `); // interpolacao 
        
        await playRaceEngine(player01, player02); // vai esperar a funcao playRaceEngine terminar para continuar (ENCADEMENTO DE FUNCOES)
    })();
 // abro e fecho parenteses para chamar a funcao
 //main(); // chama a funcao main ou posso chamar a funcao main nela sendo auto invocada (async function main(){} )(); // auto invocada
// LET declara variavel que pode ser reatribuida

// condicao dupla de ifs 