const banco_de_dados = [
    {
        pergunta: "O que significa NaN em JavaScript?",
        opcoes: [
            "Not a Number",
            "Not a Null",
            "New Array Number",
            "Number as Null"
        ],
        resposta: "Not a Number"
    },
    {
        pergunta: "Qual é a saida de: console.log(typeof null);",
        opcoes: [
            "object",
            "null",
            "undefined",
            "string"
        ],
        resposta: "object"
    },
    {
        pergunta: "Qual é o resultado de: console.log(2 + '2');",
        opcoes: [
            "4",
            "22",
            "NaN",
            "undefined"
        ],
        resposta: "22"
    },
    {
        pergunta: "Qual é a saida de: console.log(2 == '2');",
        opcoes: [
            "true",
            "false",
            "undefined",
            "NaN"
        ],
        resposta: "true"
    },
    {
        pergunta: "Qual é a saida de: console.log(2 === '2');",
        opcoes: [
            "true",
            "false",
            "undefined",
            "NaN"
        ],
        resposta: "false"
    },
    {
        pergunta: "Qual palavra-chave declara uma variável que não pode ser reatribuido?",
        opcoes: [
            "var",
            "let",
            "const",
            "function"
        ],
        resposta: "const"
    },
    {
        pergunta: "Qual dessas declarações cria uma função corretamente?",
        opcoes: [
            "function minhaFuncao() { }",
            "func minhaFuncao() { }",
            "def minhaFuncao() { }",
            "fun minhaFuncao() { }"
        ],
        resposta: "function minhaFuncao() { }"
    },
    {
        pergunta: "Qual é a saída de: console.log(typeof []);",
        opcoes: [
            "array",
            "object",
            "list",
            "undefined"
        ],
        resposta: "object"
    },
    {
        pergunta: "Como escrever um comentário de uma linha em JavaScript?",
        opcoes: [
            "/* comentário */",
            "<!-- comentário -->",
            "// comentário",
            "# comentário"
        ],
        resposta: "// comentário"
    },
    {
        pergunta: "O que o método Array.push() faz ?",
        opcoes: [
            "Remove o primeiro elemento do array",
            "Adiciona elementos no início do array",
            "Adiciona elementos no final do array",
            "Remove o último elemento do array"
        ],
        resposta: "Adiciona elementos no final do array"
    },
    {
        pergunta: "Qual é o valor de uma variável declarada mas não inicializada?",
        opcoes: [
            "null",
            "undefined",
            "0",
            "false"
        ],
        resposta: "undefined"
    },
    {
        pergunta: "O que o método Array.pop() faz?",
        opcoes: [
            "Adicina no início do array",
            "Remove o último elemento do array",
            "Remove o primeiro elemento do array",
            "Ordena o array"
        ],
        resposta: "Remove o último elemento do array"
    },
    {
        pergunta: "Qual o retorno de: console.log(Boolean(0));",
        opcoes: [
            "true",
            "false",
            "undefined",
            "null"
        ],
        resposta: "false"
    },
    {
        pergunta: "Qual a saída de: console.log('5' - 2);",
        opcoes: [
            "3",
            "'52'",
            "undefined",
            "NaN"
        ],
        resposta: "3"
    },
    {
        pergunta: "Qual é o escopo de uma variável declarada com let",
        opcoes: [
            "Global",
            "Função",
            "Bloco",
            "Objeto"
        ],
        resposta: "Bloco"
    },
    {
        pergunta: "Qual é o resultado de: console.log([] == []);",
        opcoes: [
            "true",
            "false",
            "undefined",
            "null"
        ],
        resposta: "false"
    },
    {
        pergunta: "Qual é o resultado de: console.log(0 == false)",
        opcoes: [
            "true",
            "false",
            "undefined",
            "null"
        ],
        resposta: "false"
    },
    {
        pergunta: "O que a função JSON.stringfy() faz ?",
        opcoes: [
            "Transforma um objeto em string JSON",
            "Transforma uma string em objeto JSON",
            "Transforma array em número",
            "Transforma boolean em número"
        ],
        resposta: "Transforma um objeto em string JSON"
    },
    {
        pergunta: "O que a função JSON.parse() faz ?",
        opcoes: [
            "Transforma string JSON em objeto JavaScript",
            "Transforma objeto em string JSON",
            "Transforma array em string",
            "Transforma número em string"
        ],
        resposta: "Transforma string JSON em objeto JavaScript"
    }
]

export default banco_de_dados