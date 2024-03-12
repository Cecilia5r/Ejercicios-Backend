const readlineSync = require("readline-sync");
const { generarNumeroAleatorio, verificarAdivinanza } = require("./adivinanza");

const obtenerNumeroUsuario = () => {
    return readlineSync.question("Ingresar un numero: ");

};


const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log("Bienvenido Adivina el numero secreto");
    console.log("intenta Adivinar el numero del 1 al 10.\n");

    while(numeroAdivinado !== numeroSecreto) {
        numeroAdivinados = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }
};

juegoAdivinanza()
