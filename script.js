function randomColor() {
  return '#' + ('000000' + (Math.random() * 0xFFFFFF << 0).toString(16)).slice(-6)
}

function setColor() {
  document.getElementById('background').style.backgroundColor = randomColor();
  setTimeout(setColor, 500);
}
setColor();
console.log("🤨 Wtf are you doing here?");