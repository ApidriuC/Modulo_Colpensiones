/*Cambio de Hora Modal Final*/
function hora(hora) {
    
    var pintar = document.getElementById("HoraFinal");
    var texto = hora;
    var textoValue = texto.innerHTML;
    pintar.innerHTML = textoValue;

}

/*Cambio de Header Modal Final*/
function cambiarHeader(cambio) {
    if (cambio == document.getElementById("continuar")) {
        var info = document.getElementById("cambiarHeader");
        info.innerHTML = "Si cita ha sido asignada";
    }
    else {
        var info = document.getElementById("cambiarHeader");
        info.innerHTML = "Un asesor le atenderá online desde la comodidad de su casa u oficina";
    }
}

/*Cambio de Texto/Número/Mes contenedor Middle - Modal Final*/
function pintarTodo(element) {

    if (element == document.getElementById("seleccionado")) {
        /* Texto */
        var pintar = document.getElementById("Dia");
        var texto = document.getElementById("valueDia");
        var textoValue = texto.innerHTML;
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("DiaFinal");
        pintarFinal.innerHTML = textoValue;
        /* Número */
        var pintar = document.getElementById("Numero");
        var texto = document.getElementById("valueNumero");
        var textoValue = parseInt(texto.innerHTML);
        var pintarFinal = document.getElementById("NumeroFinal");
        pintar.innerHTML = textoValue;
        pintarFinal.innerHTML = textoValue;
        /* Mes */
        var pintar = document.getElementById("Mes");
        var texto = document.getElementById("valueMes");
        var pintarFinal = document.getElementById("MesFinal");
        var textoValue = texto.innerHTML;
        pintar.innerHTML = textoValue;
        pintarFinal.innerHTML = textoValue;


    }
    if (element == document.getElementById("seleccionado1")) {
        /* Texto */
        var pintar = document.getElementById("Dia");
        var texto = document.getElementById("valueDia1");
        var textoValue = texto.innerHTML;
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("DiaFinal");
        pintarFinal.innerHTML = textoValue;
        /* Número */
        var pintar = document.getElementById("Numero");
        var texto = document.getElementById("valueNumero1");
        var textoValue = parseInt(texto.innerHTML);
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("NumeroFinal");
        pintarFinal.innerHTML = textoValue;
        /* Mes */
        var pintar = document.getElementById("Mes");
        var texto = document.getElementById("valueMes");
        var textoValue = texto.innerHTML;
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("MesFinal");
        pintarFinal.innerHTML = textoValue;


    }
    if (element == document.getElementById("seleccionado2")) {
        /* Texto */
        var pintar = document.getElementById("Dia");
        var texto = document.getElementById("valueDia2");
        var textoValue = texto.innerHTML;
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("DiaFinal");
        pintarFinal.innerHTML = textoValue;
        /* Número */
        var pintar = document.getElementById("Numero");
        var texto = document.getElementById("valueNumero2");
        var textoValue = parseInt(texto.innerHTML);
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("NumeroFinal");
        pintarFinal.innerHTML = textoValue;
        /* Mes */
        var pintar = document.getElementById("Mes");
        var texto = document.getElementById("valueMes");
        var textoValue = texto.innerHTML;
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("MesFinal");
        pintarFinal.innerHTML = textoValue;
    }
    if (element == document.getElementById("seleccionado3")) {
        /* Texto */
        var pintar = document.getElementById("Dia");
        var texto = document.getElementById("valueDia3");
        var textoValue = texto.innerHTML;
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("DiaFinal");
        pintarFinal.innerHTML = textoValue;
        /* Número */
        var pintar = document.getElementById("Numero");
        var texto = document.getElementById("valueNumero3");
        var textoValue = parseInt(texto.innerHTML);
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("NumeroFinal");
        pintarFinal.innerHTML = textoValue;
        /* Mes */
        var pintar = document.getElementById("Mes");
        var texto = document.getElementById("valueMes");
        var textoValue = texto.innerHTML;
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("MesFinal");
        pintarFinal.innerHTML = textoValue;
    }
    if (element == document.getElementById("seleccionado4")) {
        /* Texto */
        var pintar = document.getElementById("Dia");
        var texto = document.getElementById("valueDia4");
        var textoValue = texto.innerHTML;
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("DiaFinal");
        pintarFinal.innerHTML = textoValue;
        /* Número */
        var pintar = document.getElementById("Numero");
        var texto = document.getElementById("valueNumero4");
        var textoValue = parseInt(texto.innerHTML);
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("NumeroFinal");
        pintarFinal.innerHTML = textoValue;
        /* Mes */
        var pintar = document.getElementById("Mes");
        var texto = document.getElementById("valueMes");
        var textoValue = texto.innerHTML;
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("MesFinal");
        pintarFinal.innerHTML = textoValue;
    }
    if (element == document.getElementById("seleccionado5")) {
        /* Texto */
        var pintar = document.getElementById("Dia");
        var texto = document.getElementById("valueDia");
        var textoValue = texto.innerHTML;
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("DiaFinal");
        pintarFinal.innerHTML = textoValue;
        /* Número */
        var pintar = document.getElementById("Numero");
        var texto = document.getElementById("valueNumero5");
        var textoValue = parseInt(texto.innerHTML);
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("NumeroFinal");
        pintarFinal.innerHTML = textoValue;
        /* Mes */
        var pintar = document.getElementById("Mes");
        var texto = document.getElementById("valueMes");
        var textoValue = texto.innerHTML;
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("MesFinal");
        pintarFinal.innerHTML = textoValue;
    }
    if (element == document.getElementById("seleccionado11")) {
        /* Texto */
        var pintar = document.getElementById("Dia");
        var texto = document.getElementById("valueDia1");
        var textoValue = texto.innerHTML;
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("DiaFinal");
        pintarFinal.innerHTML = textoValue;
        /* Número */
        var pintar = document.getElementById("Numero");
        var texto = document.getElementById("valueNumero11");
        var textoValue = parseInt(texto.innerHTML);
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("NumeroFinal");
        pintarFinal.innerHTML = textoValue;
        /* Mes */
        var pintar = document.getElementById("Mes");
        var texto = document.getElementById("valueMes1");
        var textoValue = texto.innerHTML;
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("MesFinal");
        pintarFinal.innerHTML = textoValue;
    }
    if (element == document.getElementById("seleccionado12")) {
        /* Texto */
        var pintar = document.getElementById("Dia");
        var texto = document.getElementById("valueDia2");
        var textoValue = texto.innerHTML;
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("DiaFinal");
        pintarFinal.innerHTML = textoValue;
        /* Número */
        var pintar = document.getElementById("Numero");
        var texto = document.getElementById("valueNumero12");
        var textoValue = parseInt(texto.innerHTML);
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("NumeroFinal");
        pintarFinal.innerHTML = textoValue;
        /* Mes */
        var pintar = document.getElementById("Mes");
        var texto = document.getElementById("valueMes1");
        var textoValue = texto.innerHTML;
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("MesFinal");
        pintarFinal.innerHTML = textoValue;
    }
    if (element == document.getElementById("seleccionado13")) {
        /* Texto */
        var pintar = document.getElementById("Dia");
        var texto = document.getElementById("valueDia3");
        var textoValue = texto.innerHTML;
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("DiaFinal");
        pintarFinal.innerHTML = textoValue;
        /* Número */
        var pintar = document.getElementById("Numero");
        var texto = document.getElementById("valueNumero13");
        var textoValue = parseInt(texto.innerHTML);
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("NumeroFinal");
        pintarFinal.innerHTML = textoValue;
        /* Mes */
        var pintar = document.getElementById("Mes");
        var texto = document.getElementById("valueMes1");
        var textoValue = texto.innerHTML;
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("MesFinal");
        pintarFinal.innerHTML = textoValue;
    }
    if (element == document.getElementById("seleccionado14")) {
        /* Texto */
        var pintar = document.getElementById("Dia");
        var texto = document.getElementById("valueDia4");
        var textoValue = texto.innerHTML;
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("DiaFinal");
        pintarFinal.innerHTML = textoValue;
        /* Número */
        var pintar = document.getElementById("Numero");
        var texto = document.getElementById("valueNumero14");
        var textoValue = parseInt(texto.innerHTML);
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("NumeroFinal");
        pintarFinal.innerHTML = textoValue;
        /* Mes */
        var pintar = document.getElementById("Mes");
        var texto = document.getElementById("valueMes1");
        var textoValue = texto.innerHTML;
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("MesFinal");
        pintarFinal.innerHTML = textoValue;
    }
    if (element == document.getElementById("seleccionado15")) {
        /* Texto */
        var pintar = document.getElementById("Dia");
        var texto = document.getElementById("valueDia");
        var textoValue = texto.innerHTML;
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("DiaFinal");
        pintarFinal.innerHTML = textoValue;
        /* Número */
        var pintar = document.getElementById("Numero");
        var texto = document.getElementById("valueNumero15");
        var textoValue = parseInt(texto.innerHTML);
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("NumeroFinal");
        pintarFinal.innerHTML = textoValue;
        /* Mes */
        var pintar = document.getElementById("Mes");
        var texto = document.getElementById("valueMes1");
        var textoValue = texto.innerHTML;
        pintar.innerHTML = textoValue;
        var pintarFinal = document.getElementById("MesFinal");
        pintarFinal.innerHTML = textoValue;
    }
}