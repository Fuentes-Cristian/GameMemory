function iniciarContador(params) {
    let segundos = 0;
    let minutos = 1;
    let minutosTexto;
    let segundosTexto;
    let cronometro;

    function actualizaContador() {
        segundos = segundos - 1;
        if (segundos < 0) {
            segundos = 59
            minutos = minutos - 1;
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

