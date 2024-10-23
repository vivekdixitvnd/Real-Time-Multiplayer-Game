
let socket = new WebSocket("ws://localhost:8080/game");

let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let playerX = 100;
let playerY = 100;

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        playerY -= 5;
        socket.send("MOVE_UP");
    }
    if (event.key === "ArrowDown") {
        playerY += 5;
        socket.send("MOVE_DOWN");
    }
});

socket.onmessage = function(event) {
    let players = JSON.parse(event.data);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    players.forEach(player => {
        ctx.fillRect(player.x, player.y, 50, 50);
    });
};
