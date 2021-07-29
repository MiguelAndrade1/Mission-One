// variáveis: let
// usar aspas duplas pra usar texto, quando não coloca aspas ele entende como variável
// a função só executa quando é chamada

let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")


async function converterMoedas() {

// essa função manda a função esperar enquanto sai do código e vai buscar a informação
    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function(resposta){
        return resposta.json()
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high
    
    console.log(dolar)
    console.log(euro)

    let inputValorEmReais = Number(document.getElementById("input").value)
    let textoMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    if (select.value === "$ Dolar Americano") {
        let valorEmDolares = inputValorEmReais / dolar
        textoMoedas.innerHTML = valorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }

    if (select.value === "€ Euro") {
        let valorEmEuros = inputValorEmReais / euro
        textoMoedas.innerHTML = valorEmEuros.toLocaleString("de-DE", { style: 'currency', currency: 'EUR' })
    }


    textoReal.innerHTML = inputValorEmReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

// essa função troca a bandeira e nome das moedas
function trocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")

    if (select.value === "$ Dolar Americano") {
        textoMoedas.innerHTML = "Dolar Americano"
        bandeiraMoedas.scr = "./img/eua.png"
    }

    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./img/euro.png"
    }
    converterMoedas()
}

botao.addEventListener("click", converterMoedas)
select.addEventListener("change", trocaDeMoeda)



//console.log(valorEmDolares.toLocaleString('en-US',{style: 'currency', currency: 'USD'}))
//console.log(valorEmDolares.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
