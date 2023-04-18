
$(document).ready( () => {
    $("#alt-A").on("click", e => {
        console.log(e);
    })
    
    const espera = () =>{
        return new Promise(resolve => {
            $.ajax({
                type: "get",
                url: "src/js/countryInfo.json",
                data: "",
                dataType: "",
                success: function (response) {
                    resolve(response)
                },
                error: function(e){
                    console.log(e);
                }
            
            });
        })
    }
    
    const out = async ()=>{
        const x = await espera()
        return x;
    }
  
    resolve(out())

    


    
})
