document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Resetar erros
    ['nome', 'email', 'telefone', 'mensagem'].forEach(campo => {
        document.getElementById(`${campo}Error`).textContent = '';
    });

    // Validação de campos
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const telefone = document.getElementById('telefone');
    const mensagem = document.getElementById('mensagem');

    let temErro = false;

    if (nome.value.length < 3) {
        document.getElementById('nomeError').textContent = 'Nome deve ter no mínimo 3 caracteres';
        temErro = true;
    }

    if (!email.checkValidity()) {
        document.getElementById('emailError').textContent = 'E-mail inválido';
        temErro = true;
    }

    if (!telefone.checkValidity()) {
        document.getElementById('telefoneError').textContent = 'Telefone inválido. Use apenas números.';
        temErro = true;
    }

    if (mensagem.value.length < 10) {
        document.getElementById('mensagemError').textContent = 'Mensagem deve ter no mínimo 10 caracteres';
        temErro = true;
    }

    if (temErro) return;

    // Preparar mensagem para WhatsApp
    const mensagemWhatsApp = 
        `*Nova Mensagem de Contato*\n\n` +
        `*Nome:* ${nome.value}\n` +
        `*E-mail:* ${email.value}\n` +
        `*Telefone:* ${telefone.value}\n\n` +
        `*Mensagem:*\n${mensagem.value}`;

    // Número de destino (substitua pelo seu número)
    const numeroDestino = '5591993961874'; // Exemplo: DDD + número

    // URL de envio para WhatsApp Web
    const urlWhatsApp = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensagemWhatsApp)}`;

    // Abrir WhatsApp
    window.open(urlWhatsApp, '_blank');

    // Limpar formulário
    this.reset();
});