const botoes = document.querySelectorAll(".tecla");

function clicaBotao(numero) {
    const som = document.querySelector("#som_" + botoes[numero].classList[1]);
    botoes[numero].classList.add('ativa');
    return som.play();
}

botoes.forEach((element) => {
    const som = document.querySelector("#som_" + element.classList[1]);
    element.addEventListener('click', function () {
        som.play();
    });
});

document.addEventListener("keydown", (retorno) => {
    if (retorno.code === "KeyQ") {
        clicaBotao(0)
    }

    if (retorno.code === "KeyW") {
        clicaBotao(1)
    }

    if (retorno.code === "KeyE") {
        clicaBotao(2)
    }

    if (retorno.code === "KeyA") {
        clicaBotao(3)
    }

    if (retorno.code === "KeyS") {
        clicaBotao(4)
    }

    if (retorno.code === "KeyD") {
        clicaBotao(5)
    }

    if (retorno.code === "KeyZ") {
        clicaBotao(6)
    }

    if (retorno.code === "KeyX") {
        clicaBotao(7)
    }

    if (retorno.code === "KeyC") {
        clicaBotao(8)
    }
})

document.addEventListener('keyup', (retorno) => {
    if (retorno.code === "KeyQ") {
        botoes[0].classList.remove('ativa');
    }

    if (retorno.code === "KeyW") {
        botoes[1].classList.remove('ativa');
    }

    if (retorno.code === "KeyE") {
        botoes[2].classList.remove('ativa');
    }

    if (retorno.code === "KeyA") {
        botoes[3].classList.remove('ativa');
    }

    if (retorno.code === "KeyS") {
        botoes[4].classList.remove('ativa');
    }


    if (retorno.code === "KeyD") {
        botoes[5].classList.remove('ativa');
    }

    if (retorno.code === "KeyZ") {
        botoes[6].classList.remove('ativa');
    }

    if (retorno.code === "KeyX") {
        botoes[7].classList.remove('ativa');
    }

    if (retorno.code === "KeyC") {
        botoes[8].classList.remove('ativa');
    }
});