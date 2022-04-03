const mobileBtn = document.getElementById('mobile-cta')
nav = document.querySelector('nav')
mobileBtnClose = document.getElementById('mobile-close');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
})

mobileBtnClose.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})