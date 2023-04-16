
function exito(tarjets) {
    tarjets.forEach(
        function (elemento) {
            elemento.classList.add("acertaste")
        }
    )
}
function sinExito(tarjets) {
    tarjets.forEach(
        function (elemento) {
            elemento.classList.remove("ver")
        }
    )
}




 
 

