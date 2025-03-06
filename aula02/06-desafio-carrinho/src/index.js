import  creteItem from './services/item.js';
import * as cardServices from './services/card.js';


const mycart = [] ; 
const myFavoriteList = [];

console.log("Welcome to the shopping cart!");

const item1= await creteItem("bombril", 200, 2);
const item2= await creteItem("sabao", 100, 1);
const item3= await creteItem("detergente", 150, 3);


console.log(item1.subtotal());

await cardServices.addItemToCart(mycart, item1); // adcione um item dentro do carrinho
await cardServices.addItemToCart(mycart, item2);
await cardServices.addItemToCart(myFavoriteList, item3);

console.log("Shoppe cart Total:  ");
await cardServices.calcularTotal(mycart); // calcula o total do carrinho
console.log("Favorite List Total:  ");
await cardServices.calcularTotal(myFavoriteList);
await cardServices.deleteItemToCard(mycart,item2)   // deleta um item do carrinho]
console.log("Shoppe cart Total: ");
await cardServices.calcularTotal(mycart); // calcula o total do carrinho

