// export default
//async e declarado depois da funcao
exports.connectToDatabase = async (dataName) =>  {
    console.log("se conectando ao banco: " + dataName)
} ; // funcoes async ou assincronas sao as que o sistema espera elas terminarem de executar para ir para outra e como padrao o node.js é assincrono, ou seja, ele não espera a função terminar para ir para outra.
// a estrutura para ser um exports tem que ser uma função ou um objeto e não uma variável,  a estrutura = () => {} 
exports.disconectToDatabase = () => {
    // logica
    console.log("desconectado")
    
}; // funcao ja exporetavel por padrao 
