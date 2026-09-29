function selecionarValor(valor) {

    document.getElementById("valor").value = valor;

}


function irParaPix() {

    var campo = document.getElementById("valor");

    var valor = Number(campo.value);

    if (!valor || valor <= 0) {

        alert("Digite um valor válido para a doação.");

        return;
    }

    var valorFormatado = valor
        .toFixed(2)
        .replace(".", ",");

    window.location.href =
        "pix.html?valor=" + encodeURIComponent(valorFormatado);

}


/* MOSTRAR O VALOR NA PÁGINA DO PIX */

window.addEventListener("DOMContentLoaded", function() {

    var elemento = document.getElementById("valorPix");

    if (elemento) {

        var parametros =
            new URLSearchParams(window.location.search);

        var valor =
            parametros.get("valor");

        if (valor) {

            elemento.innerHTML =
                "Você escolheu doar <strong>R$ " +
                valor +
                "</strong>";

        }

    }

});


/* COPIAR CHAVE PIX */

function copiarPix() {

    var chave =
        document.getElementById("chavePix").innerText;


    navigator.clipboard.writeText(chave)

        .then(function() {

            /* MOSTRA MENSAGEM */

            var mensagem =
                document.getElementById("mensagemCopiado");

            if (mensagem) {

                mensagem.style.display = "block";

            }


            /* MOSTRA O BOTÃO CONTINUAR */

            var continuar =
                document.getElementById("areaContinuar");

            if (continuar) {

                continuar.style.display = "block";

            }

        })

        .catch(function() {

            alert(
                "Não foi possível copiar automaticamente. " +
                "Copie a chave Pix manualmente."
            );

        });

}