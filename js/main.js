const allBtn = document.querySelector('.all-btn');
const breakfastBtn = document.querySelector('.breakfast-btn');
const lunchBtn = document.querySelector('.lunch-btn');
const dinnerBtn = document.querySelector('.dinner-btn');
const dessertBtn = document.querySelector('.dessert-btn');

const menuItems = document.querySelectorAll('.menu__item');

allBtn.addEventListener('click', () => {
  checkMenuItemClass('menu__item');
});

breakfastBtn.addEventListener('click', () => {
  checkMenuItemClass('menu__item-breakfast');
});

lunchBtn.addEventListener('click', () => {
  checkMenuItemClass('menu__item-lunch');
});

dinnerBtn.addEventListener('click', () => {
  checkMenuItemClass('menu__item-dinner');
});

dessertBtn.addEventListener('click', () => {
  checkMenuItemClass('menu__item-dessert');
});

function checkMenuItemClass(itemClass) {
  menuItems.forEach((menuItem) => {
    if (!menuItem.classList.contains(itemClass)) {
      menuItem.classList.add('menu__item-hidden');
    } else if (menuItem.classList.contains(itemClass)) {
      menuItem.classList.remove('menu__item-hidden');
    }
  });
}
