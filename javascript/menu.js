const btnMobile = document.getElementById('btn-mobile-menu');

btnMobile.addEventListener('click', toggleMenu);

function toggleMenu(){
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}