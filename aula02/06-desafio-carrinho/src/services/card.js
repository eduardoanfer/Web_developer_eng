// quais acoes meu carrinho pode fazer
import * as items from '../services/item.js';
//-> ADD item 
async function addItemToCart(userCard, item) {

    userCard.push(item); // adiciona o item ao carrinho essa e a funcao do javascript para adcionar um elemnto no vetor
   
    
}// vou precisar de item e quantidade
// deletar item do carrinho 
async function calcularTotal( userCard) {
    // vou precisar do valor total dos itens 
    // vou usar reduce que é como se fosse um for que estará somando os valores
    console.log(userCard.reduce((cdaitem, item) => cdaitem + item.subtotal(), 0)); // acc é o acumulador que vai somar o valor do item com o subtotal esse acumulador representa o valor atual
// 0 é o valor inicial do acumulador
    

}
async function deleteItemToCard(userCard, nameItem) {
    const index = userCard.findIndex((item)=> item.name === nameItem);// encontra o item no carrinho o findIndewx consigo procurar o indice do item no vetor carrinho
    if (index === -1){
       userCard.splice(index, 1)// remove o item do carrinho
    }
    

}

// remover um item 

async function removeItemToCard(userCard, index){
    // vou precisar do index do item
    userCard.splice(index, 1) // remove o item do carrinho
    return userCard; // retorna o carrinho

}
// calcular o total
export{ 
    addItemToCart,
    deleteItemToCard,
    removeItemToCard,
    calcularTotal
}
