const btnMobile = document.getElementById("btn-mobile-menu");
const menu = document.getElementById("menu-mobile");

btnMobile.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("active");
}



function query() {
    if (window.innerWidth > 990) {
        menu.classList.remove('active')
    }
}

window.addEventListener('resize', query);

