let palabra;
let errores = 0;
let aciertos = 0;
let letraIngresada = '';

let palabras = [
    'GATO',
    'MESA',
    'TELEFONO',
    'AGUA',
    'LIBRO',
];
localStorage.setItem("palabras",JSON.stringify(palabras));
let btn = id('jugar');

let imagen =id( 'imagen' ); 
let btn_letras =document.querySelectorAll( "#letras button" );

btn.addEventListener('click',comenzar);


function comenzar(event){
    imagen.src = 'img/img0.png';
    btn.disabled = true;
    errores = 0;
    aciertos = 0;    

    let parrafo = id('palabraAdivinar');
 

    parrafo.innerHTML = '';


    let cantidadPalabras = palabras.length;
    let palabraRandom = obtenerPalRandom(0,cantidadPalabras);

    palabra = palabras[ palabraRandom];
    console.log( palabra );

    let cantLetras = palabra.length;
    
    for(let i=0; i < btn_letras.length ; i++){
        btn_letras[i].disabled = false;
    }
    for(let i=0; i < cantLetras ; i++){
        let span = document.createElement('span');
        parrafo.appendChild(span);
    }

    
}

for(let i=0; i < btn_letras.length ;i++){
    btn_letras[i].addEventListener('click', seleccionarLetras);
}

function seleccionarLetras(event){
    
    let spans = document.querySelectorAll('#palabraAdivinar span');
    let spansError = document.querySelectorAll('#letrasIncorrectas span');
    let button = event.target;
    

    let letra = button.innerHTML.toUpperCase();; 
    let palabrita = palabra.toUpperCase();

    let acerto = false;
    for (let i=0; i < palabrita.length ;i++){
        if (letra == palabrita[i]){
            spans[i].innerHTML = letra;
            aciertos++;
            acerto = true
        }


    }


    if(acerto == false){
        errores++;
        let source = `img/img${errores}.png`;
        imagen.src = source;
        
    }

    if (errores == 6){
        id('resultadoJuego').style.color = "red";
        id('resultadoJuego').innerHTML="Perdiste, la palabra era " + palabra;     
        finDelJuego();
    }
    else if ( aciertos == palabra.length ){
        id('resultadoJuego').style.color = "green";
        id('resultadoJuego').innerHTML="Ganaste";
        finDelJuego();
    }
   
}

function agregarPalabra(event){

    let agregar = id('palabraNueva').value;
    agregar = agregar.toUpperCase();
    palabras = JSON.parse(localStorage.getItem("palabras"));
    if (agregar !=''){
        
        palabras.push(agregar);
        console.log(agregar);
    }
    localStorage.setItem("palabras",JSON.stringify(palabras));
    console.log(palabras);
    console.log(JSON.parse(localStorage.getItem("palabras"))); 
}

function finDelJuego(){
    for(let i=0; i <  btn_letras.length;i++)
    {
        btn_letras[i].disabled = true;
    }
    btn.disabled = false;
}
finDelJuego( );
