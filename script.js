const balls = document.getElementsByClassName('ball');
const rgbColor = document.getElementById('rgb-color');
const title = document.getElementById('title');
const answer = document.getElementById('answer');
const reset = document.getElementById('reset-game');
const placar = document.getElementById('score');
let score = 0;
placar.innerText = 'Placar:' + score;
function checkAnswer(event) {
  const resposta = event.target;
  const respostaString = JSON.stringify(resposta.style.backgroundColor);
  const correta = rgbColor.innerText;
  if (respostaString === correta) {
    answer.innerText = 'Acertou! Novas cores!';
    score += 3;
    placar.innerText = 'Placar:' + score;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}
function randomColor() {
  for (let i = 0; i < balls.length; i += 1) {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    balls[i].style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}
// para escolher um item random dentro de um array utilizei ajuda do stackOverflow https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
function randomAnswer() {
  const randomItem = balls[balls.length * Math.random() | 0];
  const color = randomItem.style.backgroundColor;
  rgbColor.innerText = JSON.stringify(color);
  title.style.backgroundColor = color;
}
function resetar() {
  randomColor();
  randomAnswer();
  answer.innerText = 'Escolha uma cor';
}
// adicionando check
for (let i = 0; i < balls.length; i += 1) {
  balls[i].addEventListener('click', checkAnswer);
}
reset.addEventListener('click', resetar);
resetar();
