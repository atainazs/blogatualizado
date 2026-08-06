// Função para navegar entre as páginas (Single Page Application)
function showPage(pageId) {
    // Esconde todas as páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Mostra a página desejada
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
        // Rola suavemente para o topo ao trocar de página
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Função para abrir a página do protagonista com animação no clique da foto
function openProtagonist(pageId) {
    const targetCard = event.currentTarget;

    // Adiciona classe de animação
    targetCard.classList.add('clicked');

    // Aguarda o término da animação antes de trocar de página
    setTimeout(() => {
        targetCard.classList.remove('clicked');
        showPage(pageId);
    }, 350);
}

// Função para animar os botões interativos ao clicar
function animateButton(button) {
    // Adiciona classe para disparar a animação CSS
    button.classList.add('animated');

    // Remove a classe após a animação terminar para poder clicar novamente
    setTimeout(() => {
        button.classList.remove('animated');
    }, 400);
}