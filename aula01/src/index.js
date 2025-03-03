const player01 = {
    nome: "Mario",
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    pontos: 0,
};

const player02 = {
    nome: "Luigi",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 4,
    pontos: 0,
};

const player03 = {
    nome: "Peach",
    velocidade: 2,
    manobrabilidade: 2,
    poder: 4,
    pontos: 0,
};

const player04 = {
    nome: "Bowser", // Corrigido nome "Browser" para "Bowser"
    velocidade: 2,
    manobrabilidade: 2,
    poder: 4,
    pontos: 0,
};

const player05 = {
    nome: "Yoshi",
    velocidade: 2,
    manobrabilidade: 2,
    poder: 4,
    pontos: 0,
};

const player06 = {
    nome: "Donkey Kong",
    velocidade: 2,
    manobrabilidade: 2,
    poder: 4,
    pontos: 0,
};

function rollDice() {
    return Math.floor(Math.random() * 6) + 1; // 1 a 6
}

async function getRandomBlock() {
    let random = Math.random(); // 0 a 1
    let result;

    switch (true) {
        case random < 0.33:
            result = "reta";
            break;
        case random < 0.66:
            result = "curva";
            break;
        default:
            result = "confronto";
            break;
    }
    return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`🎲 ${characterName} rolou um dado em ${block}: ${diceResult} + ${attribute} = ${diceResult + attribute} \n`);
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(` 🏁 Round ${round} \n `);
        
        let block = await getRandomBlock();
        console.log(`Bloco: ${block} \n`);

        let diceResult1 = rollDice();
        let diceResult2 = rollDice();

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block === "reta") {
            totalTestSkill1 = diceResult1 + character1.velocidade;
            totalTestSkill2 = diceResult2 + character2.velocidade;
            await logRollResult(character1.nome, "velocidade", diceResult1, character1.velocidade);
            await logRollResult(character2.nome, "velocidade", diceResult2, character2.velocidade);
        }
        if (block === "curva") {
            totalTestSkill1 = diceResult1 + character1.manobrabilidade;
            totalTestSkill2 = diceResult2 + character2.manobrabilidade;
            await logRollResult(character1.nome, "manobrabilidade", diceResult1, character1.manobrabilidade);
            await logRollResult(character2.nome, "manobrabilidade", diceResult2, character2.manobrabilidade);
        }
        if (block === "confronto") {
            let powerResult1 = diceResult1 + character1.poder;
            let powerResult2 = diceResult2 + character2.poder;
            console.log(`${character1.nome} confrontou ${character2.nome} \n 🥊`);
            await logRollResult(character1.nome, "poder", diceResult1, character1.poder);
            await logRollResult(character2.nome, "poder", diceResult2, character2.poder);
            
            if (powerResult1 > powerResult2 && character2.pontos > 0) {
                console.log(`${character1.nome} venceu o confronto! ${character2.nome} perdeu 1 ponto! 🐢`);
                character2.pontos--;
            }
            if (powerResult2 > powerResult1 && character1.pontos > 0) {
                console.log(`${character2.nome} venceu o confronto! ${character1.nome} perdeu 1 ponto! 🐢`);
                character1.pontos--;
            }
            console.log(powerResult1 === powerResult2 ? "🤝 Empate! Nenhum ponto foi perdido" : "");
        }

        if (totalTestSkill1 > totalTestSkill2) {
            console.log(` 🏆 O ${character1.nome} marcou um ponto! `);
            character1.pontos++;
        } else if (totalTestSkill2 > totalTestSkill1) {
            console.log(` 🏆 O ${character2.nome} marcou um ponto! `);
            character2.pontos++;
        }
        console.log("____________________________________________________");
    }
}

async function declareWinner(character1, character2) {
    console.log("Resultado Final:");
    console.log(`${character1.nome}: ${character1.pontos} ponto(s)`);
    console.log(`${character2.nome}: ${character2.pontos} ponto(s)`);
    if (character1.pontos > character2.pontos) {
        console.log(`\n 🏆 O ${character1.nome} venceu a corrida!`);
    } else if (character2.pontos > character1.pontos) {
        console.log(`\n🏆 O ${character2.nome} venceu a corrida!`);
    } else {
        console.log(`\n🤝 Empate! Ninguém venceu a corrida!`);
    }
}

(async function main() {
    console.log(`🏁 Corrida entre ${player01.nome} e ${player02.nome} começando... \n`);
    await playRaceEngine(player01, player02);
    await declareWinner(player01, player02);
})();