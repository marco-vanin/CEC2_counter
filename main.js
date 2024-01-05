/* Constants */
const DECREASE = 'decrease';
const RESET = 'reset';
const INCREASE = 'increase';

/* Selectors */
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');

/* Functions */
const handleClickButton = (button) => {
  const counterValue = document.getElementById('counterValue');

  switch (button) {
    case DECREASE:
      counterValue.innerHTML--;
      break;
    case RESET:
      counterValue.innerHTML = 0;
      break;
    case INCREASE:
      counterValue.innerHTML++;
      break;
    default:
      break;
  }

  applyRightColor(counterValue);
};

const applyRightColor = (counterValue) => {
  if (counterValue.innerHTML > 0) {
    counterValue.style.color = 'green';
  } else if (counterValue.innerHTML < 0) {
    counterValue.style.color = 'red';
  } else {
    counterValue.style.color = 'black';
  }
};

/* Event Listeners */
decreaseBtn.addEventListener('click', () => handleClickButton(DECREASE));
resetBtn.addEventListener('click', () => handleClickButton(RESET));
increaseBtn.addEventListener('click', () => handleClickButton(INCREASE));
