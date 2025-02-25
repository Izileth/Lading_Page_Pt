<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura os dados do formulário
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Monta a mensagem que será enviada para o Telegram
    $telegramMessage = "Novo contato!\n\n";
    $telegramMessage .= "Nome: $name\n";
    $telegramMessage .= "Email: $email\n";
    $telegramMessage .= "Mensagem: $message\n";

    // Configurações do bot do Telegram
    $botToken = 'SEU_TOKEN_DO_BOT';
    $chatId = 'SEU_CHAT_ID';

    // URL da API do Telegram para enviar a mensagem
    $telegramUrl = "https://api.telegram.org/bot$botToken/sendMessage";

    // Parâmetros da requisição
    $params = [
        'chat_id' => $chatId,
        'text' => $telegramMessage,
    ];

    // Envia a requisição para o Telegram usando cURL
    $ch = curl_init($telegramUrl);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    // Verifica se a mensagem foi enviada com sucesso
    if ($response) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a mensagem.";
    }
}
?>