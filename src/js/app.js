
$(document).ready( () => {
    let acertos = 2;
    let bandeiras = 3;
    
    let paises = $.ajax({
        type: "get",
        url: "src/js/countryInfo.json",
        data: "",
        dataType: "",
        success: function (response) {
            createQuestion(response)
        },
        error: function(e){
            console.log(e);
        }
    
    });




     function createQuestion(question) {
        let opcoes = []
        let indices = []
        let i = 0
        while (i < 4) {
            let ramdom = Math.floor(Math.random()*question.length)
            if(!indices.includes(ramdom)){
                console.log(ramdom);
                opcoes.push(question[ramdom]);
                indices.push(ramdom)
                i++
            }

        }

        let correct = Math.floor(Math.random()*4)
        console.log("corrto",correct);
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
        let url = "http://www.geonames.org/flags/x/"+codigo+".gif"
        console.log(url);
        $('#Bandeira').attr("src", url);
        return correct
     }


     
     function atualizarValues() { 
            $("#acertos").html(acertos + 1)
            $("#bandeiras").html(bandeiras + 1)

            // createQuestion(paises.responseJSON);
      }
})
    
    

    


    

