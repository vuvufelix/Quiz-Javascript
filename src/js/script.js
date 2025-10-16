import banco_de_dados from "./banco_de_dados.js";
import exibir_colunas from "./exibir_coluna.js";
import questao from "./questao.js";
import marcar from "./marcar_coluna.js";
import removerClasse from "./verificar_coluna.js";

const texto = document.querySelector("#texto")
const btn_proximo = document.querySelector("#btn_proximo")
const progresso = document.querySelector("#progresso")
const btn_iniciar = document.querySelector("#btn_iniciar")

let som = new Audio("/src/audio/som button.mp3")
let som_2 = new Audio("src/audio/congratis.mp3")

const asseguir = () => {
    return ++proximo
}

export let proximo = 0

export var z = false

marcar(asseguir())

texto.textContent = banco_de_dados[proximo].pergunta
questao[0].textContent = banco_de_dados[proximo].opcoes[0]
questao[1].textContent = banco_de_dados[proximo].opcoes[1]
questao[2].textContent = banco_de_dados[proximo].opcoes[2]
questao[3].textContent = banco_de_dados[proximo].opcoes[3]

btn_iniciar.addEventListener("click", () => {
    som.play()
    let mensagem = document.querySelector("#mensagem")
    mensagem.style.display = "none"
})

let largura_da_barra = 0 

var valor_do_teste = 0

btn_proximo.addEventListener("click", () => {

    som.play()
    largura_da_barra += 5.88

    if(proximo <= 17) {
        progresso.style.width = `${largura_da_barra}%`
        asseguir()
        texto.textContent = banco_de_dados[proximo].pergunta
        exibir_colunas(proximo)
        marcar(proximo)
        removerClasse()
    } else {
        som_2.play()
        const conclusao_container = document.querySelector(".conclusao_container")
        conclusao_container.style.display = "flex"

        const btn_historico = document.querySelector("#btn_historico")
        const btn_novo_jogo = document.querySelector("#btn_novo_jogo")
        
        btn_historico.addEventListener("click", () => {
            conclusao_container.style.display = "none"
            const historico_container = document.querySelector(".historico_container")
            const wwwww = document.querySelector(".wwwww")
            wwwww.style.display = "flex"

            let bb = JSON.parse(localStorage.getItem("status"))
            //
           const unicos = bb.filter((obj, index, self) => {
                return index === self.findIndex((t) => {
                    return t.pergunta === obj.pergunta
                })
           })

            unicos.forEach(historico => {

                if(historico.status == "Você acertou esta pergunta") {
                    valor_do_teste += 5.6
                }

                const p = document.createElement("p")
                let html = `
                    <p> <strong style="color:#302e2e">Pergunta:</strong> ${historico.pergunta}</p>
                    <p> <strong style="color: #ffff00">Sua resposta:</strong> ${historico.resposta}</p>
                    <p> <strong style="color: ${historico.status == "Você acertou esta pergunta"? "#4be71c":"#ff0000"};">Resultado:</strong> ${historico.status}</p>
                `
                p.innerHTML = html
                historico_container.appendChild(p)
 
            })

            const mm = document.querySelector(".mm")
            const span = document.createElement("span")
            span.style.color = `${Math.floor(valor_do_teste) >= 50 ? "#4be71c":"#ff0000"}`
            span.textContent = `Sua Avaliação: ${Math.floor(valor_do_teste)}% de 100%`
                
            mm.appendChild(span)
            
            const btn_historico_jogar_novamente = document.querySelector("#btn_historico_jogar_novamente")
            
            btn_historico_jogar_novamente.addEventListener("click", () => {
                window.location.reload()
            })
        })

        btn_novo_jogo.addEventListener("click", () => {
            window.location.reload()
        })
    }
    
})

window.addEventListener("load", () => {
    localStorage.removeItem("status")
})