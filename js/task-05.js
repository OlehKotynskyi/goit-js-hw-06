const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onImputChange);

function onImputChange(event) {
   const imputValue = event.currentTarget.value;

   if (imputValue) {
      spanEl.textContent = imputValue;
   } else {
      spanEl.textContent = 'Anonymous';
   }
};

