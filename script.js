function abrirModalProjeto() {
    let modal = document.getElementById("modal-projeto");
    if (modal) {
        modal.style.display = "block";
    }
}

function fecharModalProjeto() {
    let modal = document.getElementById("modal-projeto");
    if (modal) {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    let modal = document.getElementById("modal-projeto");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

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

const formulario = document.getElementById("form-contato");

if (formulario) {
    formulario.addEventListener("submit", async function(event) {
        event.preventDefault();

        const status = document.getElementById("mensagem-status");
        const botao = formulario.querySelector("button");

        botao.disabled = true;
        botao.innerText = "Enviando...";

        const dados = new FormData(formulario);

        try {
            const resposta = await fetch("https://formspree.io/f/xwlkgawy", {
                method: "POST",
                body: dados,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (resposta.ok) {
                if (status) {
                    status.innerText = "Mensagem enviada com sucesso! Obrigada pelo contato 💙";
                    status.style.color = "#00E5FF";
                    status.style.marginTop = "20px";
                    status.style.fontWeight = "bold";
                } else {
                    mostrarNotificacao("Mensagem enviada com sucesso! 🚀");
                }
                formulario.reset();
            } else {
                if (status) {
                    status.innerText = "Não foi possível enviar a mensagem. Tente novamente.";
                    status.style.color = "#ff4d4d";
                    status.style.marginTop = "20px";
                }
            }
        } catch (erro) {
            if (status) {
                status.innerText = "Ocorreu um erro ao enviar. Verifique sua conexão e tente novamente.";
                status.style.color = "#ff4d4d";
                status.style.marginTop = "20px";
            }
        } finally {
            botao.disabled = false;
            botao.innerText = "Enviar Mensagem";
        }
    });
}
