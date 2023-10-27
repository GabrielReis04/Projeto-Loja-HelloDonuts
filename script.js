const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');
const img = document.getElementById('img')

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');

    if (menu.classList.contains('ativo')) {

        img.style.display = 'none'

    } else {

        img.style.display = 'block'

    }
})

    // Selecionar todos os itens com a classe .elevate-item
    const elevateItems = document.querySelectorAll('.elevate-item');
    const elevateItems2 = document.querySelectorAll('.home-img img');
    // Adicionar um ouvinte de eventos de mouse a cada item
    elevateItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.transition = 'transform 0.3s ease-in-out';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'translateY(0)';
        });
    });

//mesma função
    elevateItems2.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.transition = 'transform 0.3s ease-in-out';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'translateY(0)';
        });
    });

