const inputEl = document.querySelector('#validation-input');
const dataLengs = parseInt(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', inputValid);

function inputValid() {
   const length = this.value.length;
   if (length === dataLengs) {
      this.classList.remove('invalid');
      this.classList.add('valid');
   } else {
      this.classList.remove('valid');
      this.classList.add('invalid');
   }
};