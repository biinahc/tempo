let chave = "1e93ecf88608651b349b4cfa4b0de700"

function colocarNaTela(dados){
console.log(dados)

document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
document.querySelector( ".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
document.querySelector(".umidade").innerHTML = "Umidade: " + (dados.main.humidity) + "%"
}


async function buscarCidade (cidade){


    let dados = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade +
        '&appid=1e93ecf88608651b349b4cfa4b0de700&units=metric',).then( (resposta) => resposta.json())

console.log (dados)
        colocarNaTela (dados)
    
    }


function CliqueNoBotao(){
let cidade = document.querySelector(".input-cidade").value

buscarCidade(cidade)

}

