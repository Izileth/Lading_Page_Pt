function copiarLink() {
    const linkCompartilhamento = window.location.href; // Pega o link da página atual
    navigator.clipboard.writeText(linkCompartilhamento).then(() => {
        alert("Link copiado para a área de transferência!");
    }).catch(err => {
        console.error("Erro ao copiar o link: ", err);
    });
}