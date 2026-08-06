function mostrarPaginaKarol() {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('pagina-karol').style.display = 'block';
}

function mostrarPaginaRuggero() {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('pagina-ruggero').style.display = 'block';
}

function voltarPaginaInicial() {
    document.getElementById('pagina-karol').style.display = 'none';
    document.getElementById('pagina-ruggero').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
}