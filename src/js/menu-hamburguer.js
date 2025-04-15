const iconAbrirHamburguer = document.querySelector('.icon-menu-hambuguer-abrir');
const iconFecharHamburguer = document.querySelector('.icon-menu-hambuguer-fechar'); 
const menuHamburguer = document.querySelector('.menu-hamburguer');
const itemLinkMenu = document.querySelectorAll('.item-link-menu');
const overlay = document.getElementById('overlay');

function abrirMenuHamguerguer() { 
    menuHamburguer.classList.add('abrir');
    overlay.classList.add('ativo');
}

function fecharMenuHamburguer() { 
    menuHamburguer.classList.remove('abrir');
    overlay.classList.remove('ativo');
}

/* Ao clicar em um item do menu hamburguer é fechado o menu e tem um scroll até a seção clicada */
itemLinkMenu.forEach((item) => {
    item.addEventListener('click', () => {
        menuHamburguer.classList.remove('abrir');
        overlay.classList.remove('ativo');
    })
});

iconAbrirHamburguer.addEventListener('click', abrirMenuHamguerguer);
iconFecharHamburguer.addEventListener('click', fecharMenuHamburguer);
overlay.addEventListener('click', fecharMenu);