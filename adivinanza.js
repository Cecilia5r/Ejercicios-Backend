const generarNumeroAleatorio = match.floor(Math.random() * 100) + 1; {

};
    
const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if(numeroAdivinado === numeroSecreto) {
        console.log("¡Felicitaciones Adivinaste El Numero Secreto!"); 
        
    } else if ( numeroAdivinado > numeroSecreto) {
        console.log("El Numero Secreto es menor. ¡Sigue intentando!");

    } else {
        console.log("El Numero Secreto es mayor. ¡Sigue intentando!");
    }
};

module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
    
};