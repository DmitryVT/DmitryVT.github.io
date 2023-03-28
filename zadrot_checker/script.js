// Выбираем нужные элементы
const introScreen = document.querySelector('.intro-screen');
const startBtn = document.querySelector('#start-btn');
const quizScreen = document.querySelector('.quiz-screen');
const timer = document.querySelector('#timer');
const gamesList = document.querySelectorAll('input[type="checkbox"]');
const submitBtn = document.querySelector('#submit-btn');
const resultScreen = document.querySelector('.result-screen');
const scoreEl = document.querySelector('#score');
const restartBtn = document.querySelector('#restart-btn');

// Переменные для хранения времени и количества отмеченных игр
let timeLeft = 3;
let score = 0;

// Функция для скрытия элемента
function hideElement(element) {
  element.classList.add('hidden');
}

// Функция для отображения элемента
function showElement(element) {
  element.classList.remove('hidden');
}

// Обработчик нажатия на кнопку начала теста
startBtn.addEventListener('click', () => {
  hideElement(introScreen); // Скрываем экран вступления
  showElement(quizScreen); // Отображаем экран с тестом

  // Запускаем таймер обратного отсчета перед началом теста
  const countdown = setInterval(() => {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(countdown);
      hideElement(timer); // Скрываем таймер
    }
  }, 1000);
});

// Обработчик нажатия на кнопку узнать результат
submitBtn.addEventListener('click', () => {
  // Подсчитываем количество отмеченных игр
  score = Array.from(gamesList).filter(game => game.checked).length;
  scoreEl.textContent = score;
  hideElement(quizScreen); // Скрываем экран с тестом
  showElement(resultScreen); // Отображаем экран с результатом
});

// Обработчик нажатия на кнопку еще раз
restartBtn.addEventListener('click', () => {
  // Сбрасываем значения переменных
  timeLeft = 3;
  score = 0;
  timer.textContent = timeLeft;
  scoreEl.textContent = score;

  // Сбрасываем состояние чекбоксов
  gamesList.forEach(game => game.checked = false);

  hideElement(resultScreen); // Скрываем экран с результатом
  showElement(introScreen); // Отображаем экран вступления
});
