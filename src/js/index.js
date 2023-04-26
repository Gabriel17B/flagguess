$('#treino').popover()
$('.ranking').popover()

function iniciarTreino(num){
    window.location.href = "jogo.html?gamemode=questionary&band="+ num;
}

function setContinent(){
    console.log($("#selCont").val())
    sessionStorage.setItem("continent",$("#selCont").val())
}