// Создаем элементы меню и фон
const menuOverlay = document.createElement('div');
menuOverlay.classList.add('menu-overlay');
document.body.append(menuOverlay);

const mobileMenu = document.createElement('div');
mobileMenu.classList.add('mobile-menu');
mobileMenu.innerHTML = `
    <div class="close-menu">&times;</div>
    <a href="#catalog">Каталог</a>
    <a href="#reviews">Отзывы</a>
    <a href="#contacts">Контакты</a>
    <a href="tel:+77477064857">+7 747 706 4857</a>
`;
document.body.append(mobileMenu);

// Функция открыть меню
document.querySelector('#menu').addEventListener('click', () => {
    mobileMenu.classList.add('show');
    menuOverlay.classList.add('show');
});

// Закрытие меню по клику на X
mobileMenu.querySelector('.close-menu').addEventListener('click', () => {
    mobileMenu.classList.remove('show');
    menuOverlay.classList.remove('show');
});

// Закрытие меню по клику на фон
menuOverlay.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
    menuOverlay.classList.remove('show');
});

document.querySelector('.mobile-menu').addEventListener('click',()=>{
    mobileMenu.classList.remove('show');
    menuOverlay.classList.remove('show');
});