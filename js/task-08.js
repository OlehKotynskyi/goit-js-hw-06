const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
   event.preventDefault();
   const email = this.elements.email.value;
   const password = this.elements.password.value;
   if (email && password) {
      const formUser = {
         email: email,
         password: password,
      };
      console.log(formUser);
      this.reset()
   } else {
      alert('Заповніть усі поля');
   };
}