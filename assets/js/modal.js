

function modal() {
    document.getElementById("continuar").style.backgroundColor = "rgb(229, 229, 229)";
    document.getElementById("continuar").style.pointerEvents = "none"
    document.getElementById("button7").style = ".modalMiddle .contenedor";
    document.getElementById("button0").style = ".modalMiddle .contenedor";
    document.getElementById("button1").style = ".modalMiddle .contenedor";
    document.getElementById("button3").style = ".modalMiddle .contenedor";
    document.getElementById("button4").style = ".modalMiddle .contenedor";
    document.getElementById("button5").style = ".modalMiddle .contenedor";
    document.getElementById("button6").style = ".modalMiddle .contenedor";
    document.getElementById("button2").style = ".modalMiddle .contenedor";

    if (document.getElementById("desplegarModal").style.top != "12%") {
        document.getElementById("middlePage").style.opacity = "0.2";
        document.getElementById("desplegarModal").style.top = "12%";
    }
    else {
        document.getElementById("middlePage").style.opacity = "1";
        document.getElementById("desplegarModal").style.top = "-256%";
    }
}


