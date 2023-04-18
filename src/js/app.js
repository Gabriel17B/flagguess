
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
    }

        
})
    
    

    


    

