function baixarPDF() {
    const link = document.createElement("a");
    link.href =
        "https://drive.google.com/uc?export=download&id=1sGa2aq-D8kbk0zsvEiRSS2v0Cxpsiz96";
    link.download = "meu-arquivo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}