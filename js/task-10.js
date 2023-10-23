const inputEl = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const containerBox = document.querySelector('#boxes');


createBtn.addEventListener('click', onCreateBox);
destroyBtn.addEventListener('click', onDestroyBox);

function onCreateBox() {
   const element = inputEl.value;
   const elementsBoxes = [];
   let boxSize = 30;

   for (let index = 0; index < element; index++) {
      const box = document.createElement('div');
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.backgroundColor = getRandomHexColor();
      elementsBoxes.push(box);
      boxSize += 10;
   }
   containerBox.append(...elementsBoxes);
}

function onDestroyBox() {
   containerBox.innerHTML = '';
}

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}
