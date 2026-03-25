document.querySelector('#menu').addEventListener('click', () => {
    // Если меню уже есть, ничего не делаем
    if(document.querySelector('.openMenu')) return;

    const itSmenu = `
        <h3><a href='#catalog'>Каталог</a></h3>
        <h3><a href='#reviews'>Отзовы</a></h3>
        <h3><a href='#contacts'>Контакты</a></h3>
        <h3><a href='tel:+77477064857'>+7 747 706 4857</a></h3>
    `;

    const okCreate = document.createElement('div');
    okCreate.classList.add('openMenu');
    okCreate.innerHTML = itSmenu;
    document.body.append(okCreate);

    // Анимируем появление
    requestAnimationFrame(() => {
        okCreate.classList.add('show');
    });

    // Закрытие при клике на меню
    okCreate.addEventListener('click', () => {
        okCreate.classList.remove('show');
        // После окончания анимации удаляем элемент
        okCreate.addEventListener('transitionend', () => okCreate.remove(), { once: true });
    });
});