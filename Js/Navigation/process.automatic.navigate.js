
function debugLog(message) {
    console.log(`[Smooth Scroll Debug] ${message}`);
}

// Função para adicionar rolagem suave a todos os botões e links
function setupSmoothScrollNavigation() {
    // Log inicial
    debugLog('Iniciando configuração de navegação suave');

    // Seleção ampla de elementos
    const scrollElements = document.querySelectorAll('button, a[href^="#"]');
    
    debugLog(`Elementos encontrados: ${scrollElements.length}`);

    scrollElements.forEach((element, index) => {
        // Verificar se o elemento tem atributo href ou data-target
        const targetId = element.getAttribute('href')?.substring(1) || 
                         element.getAttribute('data-target') || 
                         element.dataset.href;

        debugLog(`Elemento ${index + 1}:`);
        debugLog(`- Tipo: ${element.tagName}`);
        debugLog(`- ID alvo identificado: ${targetId}`);

        // Adicionar listener de forma mais robusta
        element.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetElement = targetId ? document.getElementById(targetId) : null;
            
            if (targetElement) {
                debugLog(`Rolando para elemento: ${targetId}`);
                
                try {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                } catch (error) {
                    debugLog(`Erro ao rolar: ${error.message}`);
                }
            } else {
                debugLog(`Elemento de destino ${targetId} não encontrado`);
            }
        });
    });

    debugLog('Configuração de navegação suave concluída');
}

// Múltiplas formas de garantir carregamento
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupSmoothScrollNavigation);
} else {
    setupSmoothScrollNavigation();
}

// Fallback adicional
window.addEventListener('load', setupSmoothScrollNavigation);