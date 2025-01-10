document.querySelector('#menu').addEventListener('click',()=>{
    let itSmenu="<h3><a href='#catalog'>Каталог</a></h3> <h3><a href='#reviews'>Отзовы</a></h3> <h3><a href='#contacts'>Контакты</a></h3><h3><a href='tel:+77477064857'>+7 747 706 4857</a></h3>";
    let okCreate=document.createElement('div');
    okCreate.classList.add('openMenu');
    okCreate.innerHTML=`${itSmenu}`;
    document.querySelector('main').prepend(okCreate);
    closeMenu();
});

function closeMenu(){
    document.querySelector('.openMenu').addEventListener('click',()=>{
        document.querySelector('.openMenu').remove();
    });
}
// closeMenu();