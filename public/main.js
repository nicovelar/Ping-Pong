var game = function () {
    //Declaración de variables
    let time = 30;
    let movement = 20;
    let movementBar = 20;
    let width = document.documentElement.clientWidth - movement;
    let height = document.documentElement.clientHeight - movement;
    let controlGame;
    let player1;
    let player2;

    //Comienza el juego
    function start() {
        init();
        controlGame = setInterval(play, time);
    }

    //Valores iniciales
    function init() {
        ball.style.left = 0;
        ball.state = 1;
        ball.direction = 1; //right 1, left 2
        player1 = new Object();
        player2 = new Object();
        player1.keyPress = false;
        player1.key = null;
        player2.keyPress = false;
        player2.key = null;
    }

    //Pone a funcionar el juego frame a frame según el intérvalo
       function play() {
        console.log("Hola")
    }

    //Limpia el intervalo para parar el juego
    function stop() {
        clearInterval(controlGame);
        document.body.style.backgroundImage = "url(/images/157364-abstract-red-background-vector-illustration.jpg)";
    }
    
 
    start();
}();