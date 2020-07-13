// Fixed menu

let topHeader = document.querySelector('.header__top')
let logo = document.querySelector('.logo__img');

let links = document.querySelectorAll('.menu__link');

const selection = document.querySelector('.selection');
const filter = document.querySelector('.filter');

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu__list');
const menuLink = document.querySelectorAll('.menu__list a');
const body = document.querySelector('body');




let sticky = topHeader.offsetTop;
window.onscroll = cling => {
    if (window.pageYOffset > 20) {
        topHeader.style.backgroundColor = '#201D1D';
        topHeader.style.top = 0;
        topHeader.style.marginTop = 0;
        logo.style.height = 56 + 'px';
        

      }else if(window.pageYOffset <= 20){
        topHeader.style.backgroundColor = 'rgb(255, 255, 255, 0)';
        topHeader.style.marginTop = 20+'px';
        topHeader.style.marginBottom = 20+'px';
        logo.style.height = 100 + '%';  
        
        if(menuList.classList.contains('menu__list--active') && screen.width >= 991){
          menuList.classList.remove('menu__list--active');
        }
      }

    if(topHeader.classList.contains('header--active') && topHeader.offsetTop >= 0 && screen.width < 991){
      topHeader.style.backgroundColor = '#201D1D';
    }
  
};

// Change active class when press

for(let i = 0; i < links.length; i++){

  links[i].onclick = () => {
    let activeLink = document.querySelector('.menu__link--active');
    activeLink.classList.remove('menu__link--active');
    links[i].classList.add('menu__link--active');
  };
}



// Change active class when scroll

window.addEventListener('scroll', () => {
  const scrollDistance = window.scrollY;

  const section = document.querySelectorAll('.section').forEach((el,i) => {
    if(el.offsetTop - 400 <= scrollDistance){
      links.forEach(el => {
        if(el.classList.contains('menu__link--active')){
          el.classList.remove('menu__link--active')
        }
      });
        document.querySelectorAll('.menu li')[i].querySelector('a').classList.add('menu__link--active');
    }
  })  
});


// Call window of request


const callRequest = document.querySelectorAll('.call-request').forEach(el => {
  el.onclick = () => {
    filter.style.display = 'block';
    selection.style.display = 'block';
    body.style.overflowY = 'hidden';
  }
});

const repairRequest = document.querySelector('.repair-request');
const repairButtons = document.querySelectorAll('.repair__button-link').forEach(el => {
  el.onclick = () => {
    filter.style.display = 'block';
    repairRequest.style.display = 'block';
    body.style.overflowY = 'hidden';

  }
});

// form
const requestForm = document.querySelector('.request-form');

const requestButton = document.querySelectorAll('.request-button').forEach(el => {
  el.onclick = () => {
    requestForm.style.display = 'block';
  }
})

window.onclick = (event) => {
  if(event.target === filter){
    selection.style.display = 'none';
    filter.style.display = 'none';
    repairRequest.style.display = 'none';
    requestForm.style.display = 'none';
    body.style.overflowY = 'scroll';

  }
}

document.querySelectorAll('.fa-times').forEach(el => {
  el.onclick = () => {
    filter.style.display = 'none';
    selection.style.display = 'none';
    repairRequest.style.display = 'none';
    requestForm.style.display = 'none';
    body.style.overflowY = 'scroll';

  }
});

const submitBtn = document.querySelector('.form-btn');
submitBtn.addEventListener('click', showMessage);

function showMessage(){
  const input = document.querySelectorAll('.input');
  input.forEach(el => {
    if(input.value === null || input.value === ''){
      alert('Заповніть поля вводу!');
    }
  })
}


