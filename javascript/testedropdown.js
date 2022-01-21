//Dropdown normal

const btnServicos = document.getElementById('btnservicos')
const btnEventos = document.getElementById('btneventos')

btnServicos.addEventListener('click', toggleDropdownServicos)
btnEventos.addEventListener('click', toggleDropdownEventos)

function toggleDropdownServicos(){
    const ulServicos = document.getElementById('ulservicos')
    ulServicos.classList.toggle('activedrop')
}

function toggleDropdownEventos(){
    const urlEventos = document.getElementById('urleventos')
    urlEventos.classList.toggle('activedrop')
}


//Dropdown mobile
const btnServicosMobile = document.getElementById('btn-servicos-mobile')
const btnEventosMobile = document.getElementById('btn-eventos-mobile')

btnServicosMobile.addEventListener('click', toggleDropdownServicosMobile)
btnEventosMobile.addEventListener('click', toggleDropdownEventosMobile)

function toggleDropdownServicosMobile(){
    const dropdownServicosMobile = document.getElementById('dropdown-servicos-mobile')
    dropdownServicosMobile.classList.toggle('active')

    const dropdownEventosMobile = document.getElementById('dropdown-eventos-mobile')
    dropdownEventosMobile.classList.remove('active')
}

function toggleDropdownEventosMobile(){
    const dropdownEventosMobile = document.getElementById('dropdown-eventos-mobile')
    dropdownEventosMobile.classList.toggle('active')

    const dropdownServicosMobile = document.getElementById('dropdown-servicos-mobile')
    dropdownServicosMobile.classList.remove('active')
}