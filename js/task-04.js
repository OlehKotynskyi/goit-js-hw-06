const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const numberValue = document.querySelector('#value');

let counterValue = 0;

const onDecrementBtn = () => {
   counterValue--;
   numberValue.textContent = counterValue;
}

const onIncrementBtn = () => {
   counterValue++;
   numberValue.textContent = counterValue;
}

btnDecrement.addEventListener('click', onDecrementBtn);
btnIncrement.addEventListener('click', onIncrementBtn);