const ingredients = [
   'Potatoes',
   'Mushrooms',
   'Garlic',
   'Tomatos',
   'Herbs',
   'Condiments',
];

const listIngredients = document.querySelector("#ingredients");

const itemHTML = ingredients.map(item => {
   const itemIngredient = document.createElement("li");
   itemIngredient.classList.add("item");
   itemIngredient.textContent = item;
   return itemIngredient;
});

listIngredients.append(...itemHTML);