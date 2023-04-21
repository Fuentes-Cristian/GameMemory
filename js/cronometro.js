function iniciarContador(params) {
    let segundos = 59;
    let minutos = 0;
    let minutosTexto;
    let segundosTexto;
    let cronometro;

    function actualizaContador() {
        segundos--;
        if (segundos < 0) {
            segundos = 59
            minutos--;
        }else if (segundos === 00) {
            return(
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Se te acabo el tiempo 😣!',
                    footer: '<a href = "./index.html"><button id = "btn-reiniciar-js" class ="btn-reiniciar-js">Reiniciar</button></a>'
                })
            )
            
        }
        if (minutos < 0) {
            segundos = 0
            minutos = 0;
            clearInterval(cronometro)
        }
        segundosTexto = segundos;
        minutosTexto  = minutos;

        if (segundos < 10) {
            segundosTexto = '0' + segundos
        }
        if (minutos < 10) {
            minutosTexto = '0' + minutos
        }
        
        document.querySelector("#minutos").innerText =  minutosTexto
        document.querySelector("#segundos").innerText =  segundosTexto


    }

 cronometro = setInterval(actualizaContador, 1000)
}

