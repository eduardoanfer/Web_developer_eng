async function createItem(name, price, quantity) {
    // Gera um índice aleatório entre 1 e 100
    const index = Math.floor(Math.random() * 100) + 1;

    // Retorna o objeto com as propriedades corretas
    return {
        name,
        price,
        quantity,
        index,
        subtotal: () => price * quantity, // Função para calcular o subtotal
    };
}
export default createItem;


