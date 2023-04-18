
$(document).ready( () => {
    $("#alt-A").on("click", e => {
        console.log(e);
    })
    
    let a = $.ajax({
        type: "get",
        url: "src/js/countryInfo.json",
        data: "",
        dataType: "",
        success: function (response) {
            carregar(response)
        },
        error: function(e){
            console.log(e);
        }
    
    });

    function carregar(paisesJson) {
        let paises =  paisesJson;
        console.log(paises);
        init(paises)
    }

    function init(attr){
        let ramdom = Math.floor(Math.random()*attr.length)
        console.log(ramdom);
        console.log(attr[ramdom]);
    }

     function createQuestion(question) {
        
     }   
})
    
    

    


    

