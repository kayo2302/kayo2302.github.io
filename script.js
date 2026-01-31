function laugh(){
  const audio = new Audio("https://www.myinstants.com/media/sounds/vine-boom.mp3");
  audio.volume = 0.4;
  audio.play();
}

function moveButton(btn){
  const x = Math.random() * (window.innerWidth - 160);
  const y = Math.random() * (window.innerHeight - 80);
  btn.style.position = "absolute";
  btn.style.left = x + "px";
  btn.style.top = y + "px";
}

window.addEventListener("DOMContentLoaded", () => {
  const troll = document.getElementById("trollBtn");
  if(troll){
    troll.addEventListener("mouseenter", () => {
      laugh();
      moveButton(troll);
    });
    troll.addEventListener("click", () => {
      laugh();
      moveButton(troll);
    });
  }
});
