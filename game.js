const seccionBatalla = document.getElementById('campo-batalla');
const msjBatalla = document.getElementById('msj-batalla');
const imgAtaqueJugador = document.getElementById('img-ataque-jugador');
const imgAtaquePc = document.getElementById('img-ataque-pc');
const btnPiedra = document.getElementById('btn-piedra');
const btnPapel = document.getElementById('btn-papel');
const btnTijeras = document.getElementById('btn-tijeras');
const retry = document.getElementById('retry');
const ataques = document.getElementById('ataques');
const textElegirAtaque = document.getElementById('text-ataque');

let cPuntosJugador = document.getElementById('puntos-jugador');
let cPuntosPc = document.getElementById('puntos-pc');

let opcionJugador;
let opcionPc;
let imgJugador;
let imgPc;
let puntosPc = 0;
let puntosJugador = 0;

const imagenes = [
  {
    NAME: "Piedra",
    URL: "img/Piedra.png"
  },
  {
    NAME: "Papel",
    URL: "img/Papel.png"
  },
  {
    NAME: "Tijeras",
    URL: "img/Tijeras.png"
  }
];

function iniciar(){
  seccionBatalla.style.display = 'none';
  retry.style.display = 'none';
};

btnPiedra.addEventListener('click', function(){
  opcionJugador = "Piedra";
  opPc();
});

btnPapel.addEventListener('click', function(){
  opcionJugador = "Papel";
  opPc();
});

btnTijeras.addEventListener('click', function(){
  opcionJugador = "Tijeras";
  opPc();
});

function opPc(){
  var aleatorio = nAleatorio();
  if (aleatorio == 0){
    opcionPc = "Piedra";
  } else if (aleatorio == 1){
    opcionPc = "Papel";
  } else if (aleatorio == 2){
    opcionPc = "Tijeras";
  };

  batalla();
};

function batalla(){
  if(opcionJugador == opcionPc) {
    msjBatalla.innerHTML = "Empate";
    msjBatalla.style.color = 'black';
  } else if(opcionJugador == "Piedra" && opcionPc == "Tijeras"){
    msjBatalla.innerHTML = "Ganaste!";
    msjBatalla.style.color = 'black';
    ganaJugador();
    ganador();
  } else if(opcionJugador == "Papel" && opcionPc == "Piedra"){
    msjBatalla.innerHTML = "Ganaste!";
    msjBatalla.style.color = 'black';
    ganaJugador();
    ganador();
  } else if(opcionJugador == "Tijeras" && opcionPc == "Papel"){
    msjBatalla.innerHTML = "Ganaste!";
    msjBatalla.style.color = 'black';
    ganaJugador();
    ganador();
  } else{
    msjBatalla.innerHTML = "Perdiste :(";
    msjBatalla.style.color = 'black';
    ganaPc();
    ganador();
  };
  addImagenes();
};

function nAleatorio(){
  let n = Math.floor(Math.random() * 3);
  return n;
};

function ganaJugador() {
  puntosJugador++;
  cPuntosJugador.innerHTML = puntosJugador;
}

function ganaPc() {
  puntosPc++;
  cPuntosPc.innerHTML = puntosPc;
}

function ganador() {
  if(puntosJugador === 5 || puntosPc === 5) {
    if (puntosJugador === 5) {
      msjBatalla.innerHTML = "GANASTE EL JUEGO";
      msjBatalla.style.color = 'red';
      
    } else if (puntosPc === 5) {
      msjBatalla.innerHTML = "LA COMPUTADORA TE VENCIÓ";
      msjBatalla.style.color = 'red';
    }
    retry.style.display = 'flex';
    ataques.style.display = 'none';
    textElegirAtaque.style.display = 'none';
    retry.addEventListener("click", reiniciar);
  }
}

function reiniciar(){
  puntosJugador = 0;
  puntosPc = 0;

  cPuntosJugador.innerHTML = puntosJugador;
  cPuntosPc.innerHTML = puntosPc;

  ataques.style.display = '';
  textElegirAtaque.style.display = '';
  retry.style.display = 'none';
}


function addImagenes(){
  for (let i = 0; i < imagenes.length; i++) {
    if (opcionJugador == imagenes[i].NAME){
      imgJugador = imagenes[i].URL;
      var insertar = `<img class="img-batalla-1" src=${imgJugador} alt="">`;
      imgAtaqueJugador.innerHTML = insertar;
    };

    if (opcionPc == imagenes[i].NAME){
      imgPc = imagenes[i].URL;
      var insertar = `<img class="img-batalla-2" src=${imgPc} alt="">`;
      imgAtaquePc.innerHTML = insertar;
    };
  };

  seccionBatalla.style.display = 'flex';
};

window.addEventListener('load', iniciar);

