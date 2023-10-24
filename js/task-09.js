function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

const bodyEl = document.body;
const buttonEl = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');


buttonEl.addEventListener('click', onClick);

function onClick() {
   const randomColor = getRandomHexColor();
   bodyEl.style.backgroundColor = randomColor;
   spanColor.textContent = randomColor;
}