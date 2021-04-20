var w = document.body.clientWidth,
  h = document.body.clientHeight;

function addKvadr() {
  var div = document.createElement("div");
  div.className = "elem";
  div.id = "div";
  var div2 = document.createElement("div");
  div2.className = "elem2";
  var addElem = cont.prepend(div);
  var addElem = div.prepend(div2);
}

function moveDown() {
  let block = document.getElementById("div");
  let blockY = block.offsetTop;
  console.log(h);
  let grav = blockY + 1;
  block.style.top = grav + "px";
}
var timerId = setInterval(moveDown, 5);

function start() {
  addKvadr();
  timerId;
}

start();
