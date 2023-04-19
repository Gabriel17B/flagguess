

    let acertos = 0;
    let bandeiras = 50;

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

    function createQuestion(question) {
        setTimeout(()=>{
            let opcoes = []
            let indices = []
            // limpanndo classes
            
            $(".answers button").removeClass("correct");
            $(".answers button").removeClass("error");
            let i = 0

            while (i < 4) {
                let ramdom = Math.floor(Math.random() * question.length)
                if (!indices.includes(ramdom)) {
                    console.log(ramdom);
                    opcoes.push(question[ramdom]);
                    indices.push(ramdom)
                    i++
                }
    
            }
    
            let correct = Math.floor(Math.random() * 4)
            console.log("corrto", correct);
            console.log(opcoes[correct]);
            console.log(opcoes);
            const actualQuestion = opcoes[correct]
            console.log(indices);
            // botoes
            $("#alt-A .question-answer").html(opcoes[0].Pais)
            $("#alt-B .question-answer").html(opcoes[1].Pais)
            $("#alt-C .question-answer").html(opcoes[2].Pais)
            $("#alt-D .question-answer").html(opcoes[3].Pais)
    
    
            //alterar 
            let codigo = actualQuestion.Codigo.toLowerCase()
            let url = "http://www.geonames.org/flags/x/" + codigo + ".gif"
            console.log(url);
            $('#Bandeira').attr("src", url);
            correct2 =  correct
        },1500)
 
    }



    function atualizarValues(ac) {
        acertos = acertos + ac
        bandeiras -= 1
        $("#acertos").html(acertos)
        $("#bandeiras").html(bandeiras)

        // createQuestion(paises.responseJSON);
    }

function resposta(ind,id) {
    console.log(correct2);
    if(correct2 === ind){
        $("#"+id).addClass("correct");
        console.log("certo");
        createQuestion(paises.responseJSON);
        atualizarValues(1)
    }else{
        $("#"+id).addClass("error");
        console.log("errado");
        createQuestion(paises.responseJSON);
        let btns = $(".answers button")
        btns[correct2].classList.add("correct")
        atualizarValues(0)
    }
}








