const menu = document.getElementById('menu-mobile');
const btnMenu = document.getElementById('btn-abrir-menu');
const overlay = document.getElementById('overlay');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('ativo');
})
