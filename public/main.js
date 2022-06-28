var game = function () {
    //Declaración de variables
    let time = 20;
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
        moveBall()
        moveBar()
        checkIfLost()
    }

    //Selecciona uno de los 4 casos y los mueve según el caso
    function moveBall() {
        checkStateBall();
        switch(ball.state){
            case 1: // derecha, abajo
                ball.style.left = (ball.offsetLeft + movement) +"px";
                ball.style.top = (ball.offsetTop + movement) +"px";
                break;
            case 2: // derecha, arriba
                ball.style.left = (ball.offsetLeft + movement) +"px";
                ball.style.top = (ball.offsetTop - movement) +"px";
                break;
            case 3: // izquierda, abajo
                ball.style.left = (ball.offsetLeft - movement) +"px";
                ball.style.top = (ball.offsetTop + movement) +"px";
                break;
            case 4: // izquierda, arriba
                ball.style.left = (ball.offsetLeft - movement) +"px";
                ball.style.top = (ball.offsetTop - movement) +"px";
                break;
        }
    }

    //Cambia de dirección la pelota
    function checkStateBall() {

        if(collidePlayer2()) {
            ball.direction = 2;
            if(ball.state == 1) ball.state = 3;
            if(ball.state == 2) ball.state = 4;
        }else if(collidePlayer1()) {
            ball.direction = 1;
            if(ball.state == 3) ball.state = 1;
            if(ball.state == 4) ball.state = 2;
        }

        if(ball.direction === 1) {
            if(ball.offsetTop >= height -10) ball.state = 2;
            else if(ball.offsetTop <=0) ball.state =1;
        }else {
            if(ball.offsetTop >= height -10) ball.state = 4;
            else if(ball.offsetTop <=0) ball.state =3;
        }
    }

    //Colisiones con el Jugador1
    function collidePlayer1(){
        if(ball.offsetLeft <= (barLeft.clientWidth) &&
           ball.offsetTop >= barLeft.offsetTop &&
           ball.offsetTop <= (barLeft.offsetTop + barLeft.clientHeight)){
            return true;
        }
        return false;
    }

    //Colisiones con el Jugador2
    function collidePlayer2(){
        if(ball.offsetLeft >= (width-barRight.clientWidth) &&
           ball.offsetTop >= barRight.offsetTop &&
           ball.offsetTop <= (barRight.offsetTop + barRight.clientHeight)){
            return true;
        }
        return false;
    }

    //Mueve las barras según la tecla presionada
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

    //Detecta si la pelota se fue de rango
    function checkIfLost(){
        if(ball.offsetLeft >= width){
            stop();
            setTimeout(()=>{
                alert("Punto para el Jugador 1, Recarga la página");
            },400);
        }
        if(ball.offsetLeft <= 0){
            stop();
            setTimeout(()=>{
                alert("Punto para el Jugador 2, Recarga la página");
            },400);
           
        }
    }

    //Limpia el intervalo para parar el juego
    function stop() {
        clearInterval(controlGame);
        document.body.style.backgroundImage = "url(/images/157364-abstract-red-background-vector-illustration.jpg)";
    }
    
 
    start();
}();