var sound = document.getElementById("hover-sound");

function playHoverSound() {
  sound.play();
}

function stopHoverSound() {
  sound.pause();
  sound.currentTime = 0;
}
