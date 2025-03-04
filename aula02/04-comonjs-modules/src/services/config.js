// diz se o ambiente esta em ambiente de producao ou desenvolvimento e diversas outras configuracoes

const devArea = {	
    version:"1.0.0",
    production: true,
    //env: "development",
   // port: 3000,
};
const client ={ 
    device: "web",
};
module.exports = {
    devArea,
    client,

};