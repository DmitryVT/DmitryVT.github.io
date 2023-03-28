const startBtn = document.getElementById('start-btn');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');
const introScreen = document.querySelector('.intro-screen');
const quizScreen = document.querySelector('.quiz-screen');
const resultScreen = document.querySelector('.result-screen');
const gamesList = document.getElementById('games-list');
const scoreText = document.getElementById('score');
const timerText = document.getElementById('timer');
const gamesBox = document.getElementById('games-box');
const timerScreen = document.getElementById('timer-screen');

startBtn.addEventListener('click', function () {
  introScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  timerScreen.classList.remove('hidden');
  startTimer();
});

submitBtn.addEventListener('click', function () {
  let score = 0;
  const checkboxes = gamesList.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      score++;
    }
  });
  scoreText.innerText = score;
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
});



function startTimer() {
  let timeLeft = 3;
  const countdownInterval = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      timerText.innerText = '';
      gamesBox.classList.remove('hidden');
      submitBtn.classList.remove('hidden');
      timerScreen.classList.add('hidden');
    } else {
      timerText.innerText = timeLeft;
      timeLeft--;
    }
  }, 1100);
}
