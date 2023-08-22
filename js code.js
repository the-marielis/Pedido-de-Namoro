function sim() {
    alert('Parabéns! Agora você namora uma grande gostosa \u{1F491}')
}

function desvia() {
    var btn = document.getElementById("nop");
    console.log('Tenta de novo trouxa');
    btn.style.position = 'absolute';
    btn.style.top = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
}

function geraPosicao(min, max) {
    return Math.random() * (max - min) + min + "%";
}