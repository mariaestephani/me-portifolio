function mensagem() {
    mostrarNotificacao("Bem-vinda ao meu portfólio 💠");
}

function mostrarNotificacao(texto) {

    let notif = document.createElement("div");

    notif.innerText = texto;

    notif.style.position = "fixed";
    notif.style.bottom = "20px";
    notif.style.right = "20px";

    notif.style.background = "#00E5FF";
    notif.style.color = "#050505";

    notif.style.padding = "15px 25px";
    notif.style.borderRadius = "30px";

    notif.style.boxShadow = "0 0 20px #00E5FF";

    notif.style.fontWeight = "bold";
    notif.style.zIndex = "9999";

    document.body.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}


    setTimeout(() => {
        notif.remove();
    }, 3000);
}
