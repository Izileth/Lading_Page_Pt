const MAILCHIMP_API_KEY = 'ffb74715cd86d360de5f12d75cbf2456-us9';
const MAILCHIMP_LIST_ID = 'cb4074099a';
const MAILCHIMP_SERVER_PREFIX = 'us9';

async function inscreverNewsletter(email) {
    try {
        const response = await fetch(
            `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email_address: email,
                    status: 'subscribed'
                })
            }
        );

        const responseData = await response.json();
        
        if (response.ok) {
            console.log('Inscrição realizada com sucesso!');
            return true;
        } else {
            console.error('Erro na inscrição:', responseData);
            return false;
        }
    } catch (error) {
        console.error('Erro ao conectar com Mailchimp:', error);
        return false;
    }
}

// Evento de submit do formulário
document.getElementById('newsletterForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('emailInput');
    const messageDiv = document.getElementById('newsletterMessage');
    
    // Validação de e-mail
    if (!emailInput.checkValidity()) {
        messageDiv.textContent = 'Por favor, insira um e-mail válido.';
        messageDiv.style.color = 'red';
        return;
    }

    const email = emailInput.value;
    
    // Estado de processamento
    messageDiv.textContent = 'Processando inscrição...';
    messageDiv.style.color = 'blue';

    // Tentar inscrição
    const resultado = await inscreverNewsletter(email);
    
    if (resultado) {
        messageDiv.textContent = 'Inscrição realizada com sucesso!';
        messageDiv.style.color = 'green';
        emailInput.value = ''; // Limpa o campo
    } else {
        messageDiv.textContent = 'Erro ao se inscrever. Tente novamente.';
        messageDiv.style.color = 'red';
    }
});