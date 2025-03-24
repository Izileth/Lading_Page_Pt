document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const hamburgerPath = document.getElementById('hamburgerPath');
    const closePath = document.getElementById('closePath');
    const menuIcon = document.getElementById('menuIcon');
    const menuMobile = document.getElementById('menu-mobile');

    function toggleMenu() {
        // Alterna a visibilidade dos paths
        const isMenuOpen = menuMobile.classList.toggle('active');
        
        if (isMenuOpen) {
            hamburgerPath.style.display = 'none';
            closePath.style.display = 'block';
            menuIcon.classList.add('active');
        } else {
            hamburgerPath.style.display = 'block';
            closePath.style.display = 'none';
            menuIcon.classList.remove('active');
        }

        // Controla o scroll do body
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    }

    // Adiciona evento de clique ao botão
    menuBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleMenu();
    });

    // Fecha o menu ao clicar fora
    document.addEventListener('click', function(event) {
        if (menuMobile.classList.contains('active') && 
            !menuMobile.contains(event.target) && 
            !menuBtn.contains(event.target)) {
            toggleMenu();
        }
    });
});