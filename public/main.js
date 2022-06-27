var game = function () {
    //Declaración de variables
    let time = 15;
    let movement = 10;
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
        moveBar()
    }

    function moveBar() {
        if (player1.keyPress) {
            if(player1.key == "w" && barLeft.offsetTop >= 10)
            barLeft.style.top = (barLeft.offsetTop - movementBar) + "px";
            if(player1.key == "s" && (barLeft.offsetTop + barLeft.clientHeight) <= height)
            barLeft.style.top = (barLeft.offsetTop + movementBar) + "px";
        }
        if (player2.keyPress) {
            if(player2.key == "ArrowUp" && barRight.offsetTop >= 10)
            barRight.style.top = (barRight.offsetTop - movementBar) + "px";
            if(player2.key == "ArrowDown" && (barRight.offsetTop + barRight.clientHeight) <= height)
            barRight.style.top = (barRight.offsetTop + movementBar) + "px";
        }
    }

    //Detecta si está presionando la tecla el jugador 1 o el jugador 2
    document.onkeydown = function(e) {
        e = e;
        switch(e.key) {
            case "w":
            case "s":
                player1.key = e.key;
                player1.keyPress = true;
            break;
             case "ArrowUp":
             case "ArrowDown":
                player2.key = e.key;
                player2.keyPress = true;
            break;  
        }
    }

    //Detecta si dejó de presionar la tecla el jugador 1 o el jugador 2
    document.onkeyup = function(e){
        if (e.key == "w" || e.key == "s")
            player1.keyPress = false;
        if (e.key == "ArrowUp" || e.key == "ArrowDown")
            player2.keyPress = false;
    } 

    //Limpia el intervalo para parar el juego
    function stop() {
        clearInterval(controlGame);
        document.body.style.backgroundImage = "url(/images/157364-abstract-red-background-vector-illustration.jpg)";
    }
    
 
    start();
}();