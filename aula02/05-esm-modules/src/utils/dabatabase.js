// assim importo uma constante 
const databaseType ={
    userType:"admin", 
    typeData:"datalocal"

}; 




async function connectTGoDatabase(dataName) {
    console.log(`Connecting to database ${dataName}`);
    
};

async function disconectToDatabase() {
    console.log(`Disconecting to database`);
};

//agora usando o export default
export{
    connectTGoDatabase,
    disconectToDatabase, 
    databaseType
};// expotando duas funções;

