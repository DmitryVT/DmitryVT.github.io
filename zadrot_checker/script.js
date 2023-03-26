// выбираем все элементы с классом game-option и добавляем обработчик события клика на каждый из них
const gameOptions = document.querySelectorAll('.game-option');
gameOptions.forEach(option => {
  option.addEventListener('click', () => {
    option.classList.toggle('selected');
  });
});

// выбираем кнопку Начать и добавляем обработчик события клика на нее
const btnStart = document.querySelector('.btn-start');
btnStart.addEventListener('click', () => {
  // создаем переменную selectedOptions и сохраняем в нее все выбранные опции
  const selectedOptions = document.querySelectorAll('.selected');
  // обновляем текст в модальном окне с количеством выбранных опций
  const numSelected = document.querySelector('.num-selected');
  numSelected.textContent = selectedOptions.length;
  
  // выбираем элемент с классом result-text и обновляем его текст в зависимости от количества выбранных опций
  const resultText = document.querySelector('.result-text');
  if (selectedOptions.length < 3) {
    resultText.textContent = 'Ты - нуб';
  } else if (selectedOptions.length >= 3 && selectedOptions.length <= 5) {
    resultText.textContent = 'Ты - новичок';
  } else if (selectedOptions.length >= 6 && selectedOptions.length <= 8) {
    resultText.textContent = 'Ты - опытный геймер';
  } else {
    resultText.textContent = 'Ты - мастер игры';
  }
  
  // показываем модальное окно
  const modalOverlay = document.querySelector('.modal-overlay');
  modalOverlay.classList.add('show');
});

// выбираем кнопку Закрыть в модальном окне и добавляем обработчик события клика на нее
const btnClose = document.querySelector('.btn-close');
btnClose.addEventListener('click', () => {
  // скрываем модальное окно
  const modalOverlay = document.querySelector('.modal-overlay');
  modalOverlay.classList.remove('show');
  
  // сбрасываем выбранные опции
  const selectedOptions = document.querySelectorAll('.selected');
  selectedOptions.forEach(option => {
    option.classList.remove('selected');
  });
  
  // обновляем текст в модальном окне
  const numSelected = document.querySelector('.num-selected');
  numSelected.textContent = '0';
  const resultText = document.querySelector('.result-text');
  resultText.textContent = '';
});
