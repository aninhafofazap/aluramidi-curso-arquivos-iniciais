## Soluçao para apenas um item da lista

// var botao = document.querySelector(".tecla_pom");
// var som = document.querySelector("#som_tecla_pom");

// botao.addEventListener('click', function () {
//     som.play();
// });



## Solução para todos os itens da lista, feito com While e for.

function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

// enquanto
```while``` (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio)
    }

    contador = contador + 1;

}

//para
```for``` (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio)
    }

## Solução com o mouse.
  
  botoes.forEach((element) => {
    const som = document.querySelector("#som_" + element.classList[1]);
    element.addEventListener('click', function () {
        som.play();
    });

//Caso o elemento não seja nulo tocar o som, caso nao seja encontrado não tocar e mostrar erro no console.

        if (som != null && som.localName === 'audio') {
            som.play();
        }
        else {
            console.log('Som não encontrado ou seletor inválido');
        }
    }
    )
 })

## Observações retiradas da aula 

// Variaveis ou var/let é uma referencia que pode se modificar e receber outros valores.
// Constantes ou const é uma referencia onde seu valor não muda.
// While depende da condição ser verdadeira ou falsa.
// classlist.add para adicionar nova classe.
// classlist.remove para remover uma classe.
// == compara os valores
// === compara o valor e o tipo dos dados
// != Retorna verdadeiro caso os operandos não sejam iguais.
// && operador logico, converte o valor de 1 para verdadeiro ou falso.


## Observações sobre minha solução da aula.
// document.querySelectorAll = seleciona todos os elementos daquela classe.
// forEach = executa um laço repetitivo onde retorna varios valores de uma array.
// element.classList = propriedade de leitura para retorno de uma lista de classes.
// addEventListener = usado para executar um evento de um unico elemento de um documento.




