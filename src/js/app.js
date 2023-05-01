
let acertos = 0;
let bandeiras = 0;
let paused = false;
let bandeirasT = 0

// puxando sessionStorage
console.log(sessionStorage.getItem("continent"));
if(sessionStorage.getItem("continent") == null){
    sessionStorage.setItem("continent", "todos")
}

var urlAtual = window.location.href;
var urlClass = new URL(urlAtual);
var gamemode = urlClass.searchParams.get("gamemode");
console.log(gamemode); // Algum nome que está como parâmetro na URL

$(document).ready(function () {
    if (gamemode === "questionary") {
        $(".progress").remove()
        $("#spanTempo").remove()
        bandeiras = urlClass.searchParams.get("band");
        bandeirasT = bandeiras
        $("#bandeiras").html(bandeiras)
        console.log(bandeiras);
    } else if (gamemode === "time") {
        $("#bandeirasCounter").remove()
        let tempo = 90
        let tempoFinal = tempo
        setInterval(() => {
            tempo -= 1
            if(tempo > 0){
                var maior = (parseFloat(tempo) > parseFloat(tempoFinal)? tempo : tempoFinal);
                var menor = (parseFloat(tempo) < parseFloat(tempoFinal)? tempo : tempoFinal);
            
                var result = (menor/maior)*100;
                result = Math.floor(result)
                $(".progress-value").css("width", result+"%");
                console.log("result",result+"%");
            }
            if (tempo == 0) {
                placarFinal(gamemode)
            }
            console.log(tempo);

        }, 1000);
        
    }

});



let paises = $.ajax({
    type: "get",
    url: "src/js/countryInfo.json",
    data: "",
    dataType: "",
    success: function (response) {
        createQuestion(response)
    },
    error: function (e) {
        console.log(e);
    }

});



let correct2 = 0
let indicesQjaForam = []
function createQuestion(question) {
    setTimeout(() => {
        let opcoes = []
        let indices = []
        // limpanndo classes

        $(".answers button").removeClass("correct");
        $(".answers button").removeClass("error");
        let i = 0
        while (i < 4) {
            let ramdom = Math.floor(Math.random() * question.length)
            if (!indices.includes(ramdom)) {
                // console.log(ramdom);
                opcoes.push(question[ramdom]);
                if (!indicesQjaForam.includes(question[ramdom])) {
                    indices.push(ramdom)
                    i++
                }
            }

        }


        let correct = Math.floor(Math.random() * 4)
        // console.log("corrto", correct);
        // console.log(opcoes[correct]);
        // console.log(opcoes);
        const actualQuestion = opcoes[correct]
        indicesQjaForam.push(opcoes[correct])
        console.log(indicesQjaForam);
        // console.log(indices);
        // botoes
        $("#alt-A .question-answer").html(opcoes[0].Pais)
        $("#alt-B .question-answer").html(opcoes[1].Pais)
        $("#alt-C .question-answer").html(opcoes[2].Pais)
        $("#alt-D .question-answer").html(opcoes[3].Pais)


        //alterar 
        let codigo = actualQuestion.Codigo.toLowerCase()
        let url = "http://www.geonames.org/flags/x/" + codigo + ".gif"
        // console.log(url);
        $('#Bandeira').attr("src", url);
        correct2 = correct
        paused = false
    }, 1000)

}

function placarFinal(gameM) {
    if(gameM == "questionary"){
        $(".game-area").load("src/views/placar_final.html")
        let parse = bandeirasT
        console.log(parse);
        let porcent = ((acertos / parse) * 100).toFixed(2)
        console.log(porcent);
        setTimeout(() => {
            $("#porcentagemAcertos").html(porcent + "%")
    
        }, 50)
    }else if(gameM == "time"){
        $(".game-area").load("src/views/placar_final.html")
        setTimeout(() => {
            $("#porcentagemAcertos").html(acertos)
    
        }, 50)
    }

}


function atualizarValues(ac) {
    acertos = acertos + ac
    bandeiras -= 1
    $("#acertos").html(acertos)
    $("#bandeiras").html(bandeiras)
    
    GameMode(gamemode)
}

function resposta(ind, id) {
    console.log(correct2);
    if (correct2 === ind && paused === false) {
        $("#" + id).addClass("correct");
        console.log("certo");
        createQuestion(paises.responseJSON);
        paused = true
        atualizarValues(1)
    } else {
        console.log("errado");
        if (paused === false) {
            $("#" + id).addClass("error");
            createQuestion(paises.responseJSON);
            let btns = $(".answers button")
            btns[correct2].classList.add("correct")
            atualizarValues(0)
            paused = true
        }

    }
}

function GameMode(game) {
    if(game == "questionary"){
        if(bandeiras <= 0){
            placarFinal(game)
        }

    }
}








