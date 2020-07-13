const mobBlock = document.querySelector('.mob__block');
const burgerLine = document.querySelectorAll('.burger-line');
const mobLink = document.querySelectorAll('.mob__link');

burger.addEventListener('click', activeBurger);

function activeBurger(){
    burger.classList.toggle('burger-active');
    
    burgerLine.forEach(el => {
      el.style.transition = '0.3s all linear';
    })
    if(burger.classList.contains('burger-active')){
        showMenu();
    }else{
        closeMenu();
    }
}

function showMenu(){
    mobBlock.style.display = 'block';
    body.style.overflow = 'hidden';
}

function closeMenu(){
    mobBlock.style.display = 'none';
    body.style.overflow = 'scroll';

}


mobLink.forEach(el => {
    el.onclick = () => {
        burger.classList.remove('burger-active');
        mobBlock.style.display = 'none';
        const activeLink = document.querySelector('.mob__item .menu__link--active');
        activeLink.classList.remove('menu__link--active');
        el.classList.add('menu__link--active');
        body.style.overflow = 'scroll';

    }
})

window.addEventListener('resize',function(){
    if(screen.width > 991 && burger.classList.contains('burger-active')){
        burger.classList.remove('burger-active');
        mobBlock.style.display = 'none';
        body.style.overflow = 'scroll';

    }
});

