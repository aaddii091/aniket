"strict";
// jai shree ram
let song = "";
var size = document.querySelectorAll(".button-song").length;
console.log(size);
var aditya = document.querySelectorAll(".pause")[0];
for (var i = 0; i < size; i++) {
  document
    .querySelectorAll(".button-song")
    [i].addEventListener("click", function () {
      var button1 = this.innerText;
      console.log(button1);
      makeSound(button1);
      song = button1;
    });
}
console.log(song);

// for pausing

aditya.addEventListener("click", function () {
  event.preventDefault();
  console.log("asdasd");
  pauseSound();
});

var e = new Audio("music/Enemy.mp3");
var a = new Audio("music/Demons.mp3");
var b = new Audio("music/Thunder.mp3");
var c = new Audio("music/Believer.mp3");
var d = new Audio("music/Bones.mp3");
// function pauseSound() {
//   console.log(a);
//   a.pause();
// }
function pauseSound() {
  switch (song) {
    case "Demons":
      song = "Demons";
      a.pause();

      break;
    case "Thunder":
      b.pause();
      break;
    case "Believer":
      c.pause();
      break;
    case "Bones":
      d.pause();
      break;
    case "Enemy":
      e.pause();
      break;
  }
}

function makeSound(k) {
  console.log(k);
  switch (k) {
    case "Demons":
      song = "Demons";
      a.play();
      break;
    case "Thunder":
      song = "Thunder";
      b.play();
      break;
    case "Believer":
      song = "Believer";
      c.play();
      break;
    case "Bones":
      song = "Bones";
      d.play();
      break;
    case "Enemy":
      song = "Enemy";
      e.play();
      break;
    default:
      console.log("buttonInnerHTML");
  }
}
