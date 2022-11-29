const botao = document.querySelectorAll(".tecla");


botao.forEach((element) => {
    const som = document.querySelector("#som_" + element.classList[1]);
    element.addEventListener('click', function () {
        som.play();
    })
})

// document.querySelectorAll = seleciona todos os elementos daquela classe.
// forEach = executa um laço repetitivo onde retorna varios valores de uma array.
// element.classList = propriedade de leitura para retorno de uma lista de classes.
// addEventListener = usado para executar um evento de um unico elemento de um documento.