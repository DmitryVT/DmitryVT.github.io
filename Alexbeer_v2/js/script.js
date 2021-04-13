var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var alex = new Image();
var beer = new Image();
var bg = new Image();

bg.src = "img/bg.png";
beer.src = "img/beer.png";
alex.src = "img/alex.png";

var score = 0;
// Позиция Сани
var xPos = 10;
var yPos = 420;

// Создание бутылок
var bottle = [];

bottle[0] = {
  x: 200,
  y: 0,
};

// Перемещение Сани
document.addEventListener("keydown", function (event) {
  

  if (event.keyCode == 37 && xPos != 0) {
    xPos -= 10;
  }
  if (event.keyCode == 39 && xPos != 450) {
    xPos += 10;
  }
  
});

function draw() {
  ctx.drawImage(bg, 0, 0, 550, 550);

  for (var i = 0; i < bottle.length; i++) {
    ctx.drawImage(beer, bottle[i].x, bottle[i].y, 150, 165);

    bottle[i].y += 4;

    if (bottle[i].y == 600) {
      bottle.push({
        x: Math.floor(Math.random() * bg.width - 50),
        y: 0,
      });
    }

    if (
      yPos == bottle[i].y + 100
      && xPos <= bottle[i].x + 60
      && xPos >= bottle[i].x - 60)
       {
      score++;
      bottle.pop();
      bottle.push({
        x: Math.floor(Math.random() * bg.width - 50),
        y: 0,
      })
    }
  }
  
  ctx.drawImage(alex, xPos, yPos);
 
  ctx.fillStyle = "#000";
  ctx.font = "24px Verdana";
  ctx.fillText("Счет: " + score, 10, cvs.height - 520);

  requestAnimationFrame(draw);
}

alex.onload = draw;