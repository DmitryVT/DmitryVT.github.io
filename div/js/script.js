var w = document.documentElement.clientWidth,
  h = document.documentElement.clientHeight;

function addKvadr() {
  var div = document.createElement("div");
  div.className = "elem";
  div.id = "div";
  var div2 = document.createElement("div");
  div2.className = "elem2";
  var addElem = cont.prepend(div);
  var addElem = div.prepend(div2);
  var divWidth = div.offsetWidth;
  var divX = Math.floor(Math.random() * w - divWidth/2) + "px";
  div.style.left = divX;
}

function moveDown() {
  let block = document.getElementById("div");
  let blockY = block.offsetTop;
  let blockHeight = block.offsetHeight;
  console.log(h, blockY);
  let grav = blockY + 1;
  block.style.top = grav + "px";
  if (grav == h - blockHeight) {
    clearInterval(timerId);
    div.remove();
  }
}
var timerId = setInterval(moveDown, 5);
let heals = 10;

function start() {
  addKvadr();
  timerId;
}

start();
