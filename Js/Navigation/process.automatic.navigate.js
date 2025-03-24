function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Manipula todos os links com href="#" e elementos com data-section
function setupNavigation() {
    const navElements = document.querySelectorAll('a[href="#"], [data-section]');
    
    navElements.forEach(element => {
        element.addEventListener('click', function(e) {
            // Previne comportamento padrão
            e.preventDefault();
            
            // Pega o alvo de navegação
            const target = this.getAttribute('href') || 
                           `#${this.getAttribute('data-section')}`;
            
            // Rola para o alvo
            smoothScroll(target);
        });
    });
}

// Inicializa a navegação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', setupNavigation);