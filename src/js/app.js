
$(document).ready( () => {
    let acertos = 0;
    let bandeiras = 0;
    
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
        console.log(opcoes[correct]);
        console.log(opcoes);
        const actualQuestion = opcoes[correct]
        console.log(indices);
        // botoes
        $("#alt-A .question-answer").html(opcoes[0].Pais)
        $("#alt-B .question-answer").html(opcoes[1].Pais)
        $("#alt-C .question-answer").html(opcoes[2].Pais)
        $("#alt-D .question-answer").html(opcoes[3].Pais)

        $("#alt-A").on("click",(e)=>{
            if(correct = 0){
                atualizarValues()
            }
        })
        $("#alt-B").on("click",(e)=>{

        })
        $("#alt-C").on("click",(e)=>{

        })
        $("#alt-D").on("click",(e)=>{

        })

        //alterar 
        let codigo = actualQuestion.Codigo.toLowerCase()
        let url = "http://www.geonames.org/flags/x/"+codigo+".gif"
        console.log(url);
        $('#Bandeira').attr("src", url);
     }
     
     function atualizarValues(acer,total) { 
            $("#acertos").html(acertos + acer)
            $("#bandeiras").html(bandeiras + total)
      }
})
    
    

    


    

