function id( str ){
    return document.getElementById( str );
}

function obtenerPalRandom(nummin,nummax){
    let rango = nummax-nummin;
    let valorAlAzar = Math.floor(Math.random()* rango)+ nummin;

    return valorAlAzar;
}