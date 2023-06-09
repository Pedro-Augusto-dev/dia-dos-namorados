
function sim() {
    alert("UHUUUU!!!! SABIAAA, BÊÊEEEE TE AMO");
}

function desvia(btn) {
    
    btn.style.position = 'absolute';
    btn.style.bottom =  gerarPosicao(10, 90);
    btn.style.left = gerarPosicao(10, 90);
    console.log("opa desviei..", btn)
}
function gerarPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}