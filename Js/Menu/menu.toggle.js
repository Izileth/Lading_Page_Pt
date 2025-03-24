document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const menuMobile = document.getElementById('menu-mobile');
    const menuLinks = document.querySelectorAll('#menu-mobile ul li a');
    
    // Função para alternar o menu (abrir/fechar)
    function toggleMenu() {
        menuMobile.classList.toggle('active');
        
        // Alterna o ícone do botão entre "bars" e "times"
        const icon = menuBtn.querySelector('i');
        if (menuMobile.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            document.body.style.overflow = 'hidden'; // Impede o scroll da página
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            document.body.style.overflow = ''; // Restaura o scroll da página
        }
    }
    
    // Alterna o menu ao clicar no botão
    menuBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede que o clique se propague para o documento
        toggleMenu();
    });
    
    // Fecha o menu ao clicar em um link
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (menuMobile.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        // Verifica se o menu está aberto e se o clique foi fora do menu
        if (menuMobile.classList.contains('active') && !menuMobile.contains(event.target)) {
            toggleMenu();
        }
    });
});