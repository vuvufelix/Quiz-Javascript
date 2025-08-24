import banco_de_dados from "./banco_de_dados.js"
import questao from "./questao.js"

const exibir_colunas = (cont) => {
    questao[0].textContent = banco_de_dados[cont].opcoes[0]
    questao[1].textContent = banco_de_dados[cont].opcoes[1]
    questao[2].textContent = banco_de_dados[cont].opcoes[2]
    questao[3].textContent = banco_de_dados[cont].opcoes[3]
}

export default exibir_colunas