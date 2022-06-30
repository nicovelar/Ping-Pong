//Score inicial para el jugador 1
function initialScore1(){
    console.log(localStorage.getItem('Score1'))
    if (localStorage.getItem('Score1') == null) {
    escore = 0;
    localStorage.setItem("Score1",JSON.stringify(escore));
    } 
scoreElemento = document.getElementById("score1").innerHTML += 'Score jugador1 : ' + localStorage.getItem('Score1') ;
};

//Score inicial para el jugador 2
function initialScore2(){
    if (localStorage.getItem('Score2') == null) {
    score = 0;
    localStorage.setItem("Score2",JSON.stringify(score));
    }  
escoreElemento = document.getElementById("score2").innerHTML += 'Score jugador2 : ' + localStorage.getItem('Score2') ;
};

//Añade 1 punto para el jugador 1
function setScore1() {
    let dataStorage = JSON.parse(localStorage.getItem("Score1"));
    dataStorage = dataStorage + 1;
    localStorage.setItem("Score1",JSON.stringify(dataStorage));
} 

//Añade 1 punto para el jugador 2
function setScore2() {
    let dataStorage = JSON.parse(localStorage.getItem("Score2"));
    dataStorage = dataStorage + 1;
    localStorage.setItem("Score2",JSON.stringify(dataStorage));
} 

//Detecta si el jugador 1 ganó
function ganoJugador1() {
  if (localStorage.getItem('Score1') == 5) {
    dataStorage = 0;
    localStorage.setItem("Score1",JSON.stringify(dataStorage));
    alert("Ganó el jugador 1")
  }
}

//Detecta si el jugador 2 ganó
function ganoJugador2() {
    if (localStorage.getItem('Score2') == 5) {
      dataStorage = 0;
      localStorage.setItem("Score2",JSON.stringify(dataStorage));
      alert("Ganó el jugador 2")
    }
  }