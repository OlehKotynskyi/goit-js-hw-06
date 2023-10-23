const listCategories = document.querySelector("#categories");

const listAllCategories = listCategories.children.length;
console.dir(`Number of categories: ${listAllCategories}`);

[...listCategories.children].forEach(item => {
   const itemTitel = item.firstElementChild.textContent;
   const listItemLength = item.lastElementChild.children.length;

   console.dir(`Category: ${itemTitel} \n Elements: ${listItemLength}`);
});