

function openModal(element) {
    document.getElementById("continueModal").style.display = "block";
    document.getElementById("desplegarModal").style.top = "-256%";
}
function closeModal() {
    document.getElementById("continueModal").style.display = "none";
    document.getElementById("tablas").style.display = "block";
}

function continueModal() {
    if (document.getElementById("continueModal").style.display != "none") {
        closeModal();
    }
    else {
        document.getElementById("tablas").style.display = "none";
        document.getElementById("middlePage").style.opacity = "1";
        openModal();
    }
}

