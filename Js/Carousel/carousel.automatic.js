
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('wordCarousel');
    let isDown = false;
    let startX;
    let scrollLeft;
    let animationPaused = false;
    let animation = carousel.style.animation;

    // Função para parar a animação
    function pauseAnimation() {
        if (!animationPaused) {
            animation = window.getComputedStyle(carousel).animation;
            carousel.style.animationPlayState = 'paused';
            animationPaused = true;
        }
    }

    // Função para retomar a animação
    function resumeAnimation() {
        if (animationPaused) {
            setTimeout(() => {
                carousel.style.animationPlayState = 'running';
                animationPaused = false;
            }, 500);
        }
    }

    // Eventos para mouse
    carousel.addEventListener('mouseenter', pauseAnimation);
    carousel.addEventListener('mouseleave', resumeAnimation);

    // Eventos para toque (touch)
    carousel.addEventListener('touchstart', function(e) {
        isDown = true;
        startX = e.touches[0].pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
        pauseAnimation();
    }, { passive: true });

    carousel.addEventListener('touchend', function() {
        isDown = false;
        resumeAnimation();
    }, { passive: true });

    carousel.addEventListener('touchcancel', function() {
        isDown = false;
        resumeAnimation();
    }, { passive: true });

    carousel.addEventListener('touchmove', function(e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; // Velocidade do scroll
        carousel.scrollLeft = scrollLeft - walk;
    }, { passive: false });

    // Reiniciar a animação quando o carousel completar um ciclo
    function checkPosition() {
        // A animação reinicia automaticamente, mas podemos adicionar lógica adicional aqui
    }

    // Verificar a posição do carousel periodicamente
    setInterval(checkPosition, 1000);

    // Detectar quando a página não está visível e pausar a animação para economizar recursos
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            carousel.style.animationPlayState = 'paused';
        } else {
            // Só retomar se o mouse não estiver sobre o carousel
            if (!carousel.matches(':hover')) {
                carousel.style.animationPlayState = 'running';
            }
        }
    });

    // Função para ajustar a velocidade da animação com base no número de palavras
    function adjustAnimationSpeed() {
        const wordCount = document.querySelectorAll('.word-slide').length;
        const newDuration = wordCount * 3; // 3 segundos por palavra
        carousel.style.animationDuration = `${newDuration}s`;
    }

    // Ajustar a velocidade inicial
    adjustAnimationSpeed();

    // Reajustar quando a janela for redimensionada
    window.addEventListener('resize', adjustAnimationSpeed);
});