let topHeader = document.querySelector('.header__top')
let topHeaderInner = document.querySelector('.header__top-inner');
let logo = document.querySelector('.logo__img');

let sticky = topHeader.offsetTop;
window.onscroll = cling => {
    if (window.pageYOffset >= 700) {
        topHeader.style.backgroundColor = '#201D1D';
        topHeader.style.top = 0;
        topHeader.style.marginTop = 0;
        topHeaderInner.style.paddingTop = 15+'px';
        topHeaderInner.style.paddingBottom = 15+'px';
        logo.style.height = 56 + 'px';

      }else if(window.pageYOffset <= 700){
        topHeader.style.backgroundColor = 'rgb(255, 255, 255, 0)';
        topHeader.style.marginTop = 20+'px';
        topHeader.style.marginBottom = 20+'px';
        logo.style.height = 100 + '%';

      }

};


