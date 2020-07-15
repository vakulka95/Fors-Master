let selectionReq = document.querySelector('.selection');
let repairReq = document.querySelector('.repair-request');
let formReq = document.querySelector('.request-form');
let form = document.querySelector('.form');
let thankReq = document.querySelector('.request-thank');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formName = document.querySelector('.form-name').value;
    let formPhone = document.querySelector('.form-phone').value;
    let formMail = document.querySelector('.form-mail').value;

    let request = new XMLHttpRequest();

    request.addEventListener('load', function(){
        selectionReq.style.display = 'none';
        repairReq.style.display = 'none';
        formReq.style.display = 'none';
        thankReq.style.display = 'block';

        // formTitle.innerHTML = 'Дякую, Ваша заявку успішно прийнята';
        // form.innerHTML = "Hаш менеджер зв'яжеться з Вами у найближчий час";
        // ok.value = 'Ok';
    })

    request.open('POST', '../send.php', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send('name=' + encodeURIComponent(formName)  + '&phone=' + encodeURIComponent(formPhone)) + '&mail=' + encodeURIComponent(formMail);
});