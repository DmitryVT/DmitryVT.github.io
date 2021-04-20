// получение размеров окна
var w = document.documentElement.clientWidth,
  h = document.documentElement.clientHeight;

window.addEventListener("resize", function () {
  (w = document.documentElement.clientWidth),
    (h = document.documentElement.clientHeight);
});

// создание бутылок
var beer = document.createElement("img");
beer.src = "../img/beer.png";
beer.className = "bottleimg";

var beerX = Math.floor(Math.random() * w) + "px",
  beerPos = document.querySelector("#btl"),
  y = beerPos.offsetHeight;
btl.style.left = beerX;
var grav = 10,
  score = 0;

//появление бутылок
function createbottle() {
  btl.append(beer);
  let moveY = beerPos.offsetTop;
  let botleTop = grav + "px";
  btl.style.top = botleTop;

  if (moveY < h - y - 10) {
    grav += 3;
  }
  if (moveY >= h - y - 10) {
    beer.remove();
  }
}

// начало игры после нажатия кнопки
function start() {
  btn.style.display = "none";
  var timerId = setInterval(createbottle, 7);
}
