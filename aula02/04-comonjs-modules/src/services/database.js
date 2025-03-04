// export default

exports.connectToDatabase = (dataName) =>  {
    console.log("se conectando ao banco: " + dataName)
} ;
// a estrutura para ser um exports tem que ser uma função ou um objeto e não uma variável,  a estrutura = () => {} 
exports.disconectToDatabase = () => {
    // logica
    console.log("desconectado")
    
}; // funcao ja exporetavel por padrao 
