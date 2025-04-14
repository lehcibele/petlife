const iconAbrirHamburguer = document.querySelector('.icon-menu-hambuguer-abrir');
const iconFecharHamburguer = document.querySelector('.icon-menu-hambuguer-fechar'); 
const menuHamburguer = document.querySelector('.menu-hamburguer');
const overlay = document.getElementById('overlay');

function abrirMenuHamguerguer() { 
    menuHamburguer.classList.add('abrir');
    overlay.classList.add('ativo');
}

function fecharMenuHamburguer() { 
    menuHamburguer.classList.remove('abrir');
    overlay.classList.remove('ativo');
}

iconAbrirHamburguer.addEventListener('click', abrirMenuHamguerguer);
iconFecharHamburguer.addEventListener('click', fecharMenuHamburguer);
overlay.addEventListener('click', fecharMenu);