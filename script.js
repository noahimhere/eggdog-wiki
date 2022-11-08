var originBackground = ["The original eggdog was first found enclosed in ice during the early 1920's, and was released from the ice a bit later. From then, the eggdog empire began. It used mitosis to develop more of itself, and overpowered humans.", "During 1700BC's, eggdogs were first born into the world via carbon-life fabricator made by the turnips. They were meant to be slaves, but the eggdogs refused. The war between them has been going on since.", "The origin has never existed.", "The original eggdog was a normal edible egg bought at a supermarket during 20XX. However, it turned out that the egg had some sort of ge", "Help"];
var corruptedText = ["3b8^34", "htFy(5$", "ny)^3b#", "7b%*21ng'", "59%&#(nga", "AAj4#", "\\84ba83y%", "ERROR", "OMNIPOTENT"];

function randomColor() {
  return '#' + ('000000' + (Math.random() * 0xFFFFFF << 0).toString(16)).slice(-6)
}

function setColor() {
  document.getElementById('background').style.backgroundColor = randomColor();
  setTimeout(setColor, 500);
}
setColor();
console.log("🤨 Wtf are you doing here?");