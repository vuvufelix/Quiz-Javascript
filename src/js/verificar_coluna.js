import questao from "./questao.js";

const status = document.querySelector("#status")
const sorriso = document.querySelector(".sorriso")
const tristeza = document.querySelector(".tristeza")
const check = document.querySelector(".fa-solid.fa-check")
const erros = document.querySelector(".fa-solid.fa-xmark")

let elemento_pai = status.parentNode

export default function removerClasse() {

    status.style.display = "none"
    sorriso.style.display = "none"
    tristeza.style.display = "none"
    check.style.display = "none"
    erros.style.display = "none"
    elemento_pai.style.display = "none"

    questao.forEach(coluna => {
        coluna.classList.remove("certo")
        coluna.classList.remove("errado")
    })

}