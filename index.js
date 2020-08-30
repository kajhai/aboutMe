const playButton = document.getElementById('playButton');
const audioElement = document.getElementById('backgroundAudio');
let isPlaying = false;

playButton.addEventListener('click', () => {
  const action = isPlaying ? 'pause' : 'play';
  audioElement[action]();
  isPlaying = !isPlaying;
  const buttonText = isPlaying ? 'Stop Music' : 'Play Music';
  playButton.innerHTML = buttonText;
});