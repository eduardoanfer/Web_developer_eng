const {getFullName, getProductLabel} = require('./services/products'); // importando o módulo products do arquivo products.js usando o require  - quando eu coloco entre {} eu estou importando uma função especifica do módulo depois so da ctrl +espaco que aparece as opcoes
const config = require("./services/config"); // importando o módulo config do arquivo config.js usando o require
const database = require("./services/database");
const product
async function main() {
    console.log("carrinho de compras");
    getFullName(1, "mousepad");// chamando a função getFullName do módulo products de forma direta
    getProductLabel("teclado");// chamando a função getProductLabel do módulo products de forma direta
    //p.getFullName(1, "mousepad");// chamando a função getFullName do módulo products
    //p.getProductLabel("teclado");// chamando a função getProductLabel do módulo products
    //console.log(config.production);
    //console.log(config.device);

    database.connectToDatabase("loja");// funcao ja exportavel por padrao 
}
main();