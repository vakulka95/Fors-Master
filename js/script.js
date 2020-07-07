// Fixed menu

let topHeader = document.querySelector('.header__top')
let topHeaderInner = document.querySelector('.header__top-inner');
let logo = document.querySelector('.logo__img');

let sticky = topHeader.offsetTop;
window.onscroll = cling => {
    if (window.pageYOffset >= 20) {
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

// Change active class when press
let links = document.querySelectorAll('.menu__link');
for(let i = 0; i < links.length; i++){

  links[i].onclick = () => {
    let activeLink = document.querySelector('.menu__link--active');
    activeLink.classList.remove('menu__link--active');
    links[i].classList.add('menu__link--active');
  };
}



// Change active class when scroll

// window.addEventListener('scroll', () => {
//   const scrollDistance = window.scrollY;

//   const section = document.querySelectorAll('.section').forEach((el,i) => {
//     if(el.offsetTop - 1 <= scrollDistance){
//       links.forEach(el => {
//         if(el.classList.contains('menu__link--active')){
//           el.classList.remove('menu__link--active')
//         }
//       });
//         document.querySelectorAll('.menu li')[i].querySelector('a').classList.add('menu__link--active');
//     }
//   })  
// });


// Call window of request

const selection = document.querySelector('.selection');
const filter = document.querySelector('.filter');
const callRequest = document.querySelectorAll('.call-request').forEach(el => {
  el.onclick = () => {
    filter.style.display = 'block';
    selection.style.display = 'block';
  }
});

const repairRequest = document.querySelector('.repair-request');
const repairButtons = document.querySelectorAll('.repair__button-link').forEach(el => {
  el.onclick = () => {
    filter.style.display = 'block';
    repairRequest.style.display = 'block';
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
  }
}

document.querySelectorAll('.fa-times').forEach(el => {
  el.onclick = () => {
    filter.style.display = 'none';
    selection.style.display = 'none';
    repairRequest.style.display = 'none';
    requestForm.style.display = 'none';
  }
});
