// todas as funcoes que lidam com produto. 
async function getFullName(codeId, productName){
    console.log("\n product" + codeId + " - " + productName);
}

async function getProductLabel(ProductName){
    console.log("\n Product ---" + ProductName);
}


// POSSO ESCOLHER O QUE EU QUERO EXPORTAR E O QUE EU NÃO QUERO EXPORTAR DE UM CONTEÚDO. 
//É UMA HIDDENFUNCTION. ou HIDDENCONSTANT e um arquivo que so faz sentido aqui dentro. 
const apiURL = {
    url:"https://api.com.br",
};




//fazendo  um modulo de produtos
module.exports = {
    getFullName,
    getProductLabel
}// exportando a funcao getFullName AQUI FICA O SERVICO DE PRODUTOS OU SEJA O QUE QUWERO EXPORTAR

// POSSO ESCOLHER O QUE EU QUERO EXPORTAR E O QUE EU NÃO QUERO EXPORTAR DE UM CONTEÚDO. 
//É UMA HIDDENFUNCTION.

