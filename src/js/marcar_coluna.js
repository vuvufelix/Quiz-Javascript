import questao from "./questao.js";
import banco_de_dados from "./banco_de_dados.js";

const status = document.querySelector("#status")
const sorriso = document.querySelector(".sorriso")
const tristeza = document.querySelector(".tristeza")
const check = document.querySelector(".fa-solid.fa-check")
const erros = document.querySelector(".fa-solid.fa-xmark")

let elemento_pai = status.parentNode

status.style.display = "none"
sorriso.style.display = "none"
tristeza.style.display = "none"
check.style.display = "none"
erros.style.display = "none"
elemento_pai.style.display = "none"

let som = new Audio("/src/audio/zapsplat_multimedia_game_sound_simple_ping_short_114672.mp3")
let som_2 = new Audio("src/audio/zapsplat_multimedia_game_sound_simple_ping_chime_114671.mp3")

let historico = []

function salvarStatus() {
    localStorage.setItem("status", JSON.stringify(historico))
}

export function resultado(cont) {
    let resultado_em_segundo = setTimeout(() => {
        questao.forEach(coluna => {
            if(coluna.textContent == banco_de_dados[cont].resposta) {
                coluna.classList.remove("errado")
                coluna.classList.add("certo")
            } 

            if(coluna.textContent != banco_de_dados[cont].resposta) {
                coluna.classList.remove("certo")
                coluna.classList.add("errado")
            }
        })
        som_2.play()
    }, 2000)

    return resultado_em_segundo
}

export default function marcar(cont) {
    var v = false
    questao.forEach(coluna => {
        coluna.addEventListener("click", (evento) => {
            if(!v) {
                som.play()
                if(evento.currentTarget.innerText == banco_de_dados[cont].resposta) {
    
                    const obj = {
                        pergunta: banco_de_dados[cont].pergunta,
                        resposta: banco_de_dados[cont].resposta,
                        status: "Você acertou esta pergunta"
                    }

                    historico.push(obj)
                    salvarStatus()
                    
                    evento.currentTarget.classList.remove("errado")
                    evento.currentTarget.classList.add("certo")

                    tristeza.style.display = "none"
                    erros.style.display = "none"

                    elemento_pai.style.display = "flex"
                    elemento_pai.style.color = "#4be71c"
                    status.textContent = "Correto!"
                    status.style.display = "block"
                    sorriso.style.display = "block"
                    check.style.display = "block"

                } else {

                    const obj = {
                        pergunta: banco_de_dados[cont].pergunta,
                        resposta: evento.target.innerText,
                        status: "Você errou esta pergunta"
                    }

                    historico.push(obj)
                    salvarStatus()

                    evento.currentTarget.classList.remove("certo")
                    evento.currentTarget.classList.add("errado")

                    sorriso.style.display = "none"
                    check.style.display = "none"

                    elemento_pai.style.display = "flex"
                    elemento_pai.style.color = "#ff0000"
                    status.textContent = "Errado!"
                    status.style.display = "block"
                    tristeza.style.display = "block"
                    erros.style.display = "block"
                }
                v=true
                resultado(cont)
           }
        })
    })
    v = false
}