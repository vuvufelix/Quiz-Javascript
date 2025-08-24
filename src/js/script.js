import banco_de_dados from "./banco_de_dados.js";
import exibir_colunas from "./exibir_coluna.js";
import questao from "./questao.js";
import marcar from "./marcar_coluna.js";
import removerClasse from "./verificar_coluna.js";

const texto = document.querySelector("#texto")
const btn_proximo = document.querySelector("#btn_proximo")
const progresso = document.querySelector("#progresso")

const asseguir = () => {
    return ++proximo
}

export let proximo = 0

marcar(asseguir())

texto.textContent = banco_de_dados[proximo].pergunta
questao[0].textContent = banco_de_dados[proximo].opcoes[0]
questao[1].textContent = banco_de_dados[proximo].opcoes[1]
questao[2].textContent = banco_de_dados[proximo].opcoes[2]
questao[3].textContent = banco_de_dados[proximo].opcoes[3]

btn_proximo.addEventListener("click", () => {

    if(proximo <= 17) {
        progresso.setAttribute("value", proximo)
        asseguir()
        texto.textContent = banco_de_dados[proximo].pergunta
        exibir_colunas(proximo)
        marcar(proximo)
        removerClasse()
    } else {
        alert("Parabéns você terminou o Quiz")
    }

})

//console.log(banco_de_dados)