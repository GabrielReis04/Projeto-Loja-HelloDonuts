
const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');
const img = document.getElementById('img')

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');

    if (menu.classList.contains('ativo')) {

        img.style.display = 'none'

    } else {

        img.style.display = 'block'

    }
})
// Lista de requisitos
const requisitos = {
    instagram: false,
    google: false,
    facebook: false
};

// Função para verificar requisitos
function verificarRequisitos() {
    if (requisitos.instagram && requisitos.google && requisitos.facebook) {
        exibirMensagem("success", "Requisitos foram atendidos com sucesso!");
        exibirBotaoDownload();
    } else {
        exibirMensagem("error", "Você não atendeu a todos os requisitos.");
    }
}

// Função para gerar o cupom de desconto com data e hora
function gerarCupom() {
    // Crie um canvas
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Defina o tamanho do canvas (largura e altura)
    canvas.width = 500;
    canvas.height = 200;

    // Estilo do cupom
    ctx.fillStyle = "#E1417D";
    ctx.fillRect(0, 0, canvas.width, canvas.height);


// Texto do cupom
ctx.fillStyle = "#FFF";
ctx.font = "20px Arial";

// Primeira linha de texto
ctx.fillText("HELLO DONUTS", 20, 40);

// Segunda linha de texto (abaixo da primeira)
ctx.fillText("Cupom de Desconto: HELLO20", 20, 70);

// Gere a data e hora atuais
const dataAtual = new Date();
const dataFormatada = `${dataAtual.getDate()}/${dataAtual.getMonth() + 1}/${dataAtual.getFullYear()}`;
const horaFormatada = `${dataAtual.getHours()}:${dataAtual.getMinutes()}:${dataAtual.getSeconds()}`;

// Terceira linha de texto (abaixo das duas primeiras)
ctx.fillText(`Emitido em: ${dataFormatada} às ${horaFormatada}`, 20, 100);

// Quarta linha de texto (abaixo das duas primeiras)
ctx.fillText("Apresente esse documento para o/a atendente.", 20, 140);


// Defina o link de download com o canvas como imagem
const downloadLink = document.getElementById("downloadLink");
downloadLink.href = canvas.toDataURL("image/png");

// Adicione um evento de clique ao link de download para remover o canvas antes de baixar
downloadLink.addEventListener("click", function () {
    canvas.remove(); // Remova o canvas da tela antes de baixar
});
}

gerarCupom();




// Função para exibir mensagens
function exibirMensagem(classe, mensagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.textContent = mensagem;
    mensagemDiv.className = classe;
}

// Função para exibir o link de download
function exibirBotaoDownload() {
    const downloadLink = document.getElementById("downloadLink");
    downloadLink.style.display = "block";
}

// Adicionar evento de clique ao botão "Analisar"
const verificarButton = document.getElementById("verificar");
verificarButton.addEventListener("click", verificarRequisitos);

// Adicionar evento de clique ao link para o Instagram (caractere)
const linkInstagram = document.getElementById("linkInstagram");
linkInstagram.addEventListener("click", function () {
    requisitos.instagram = true; // Define que o requisito do Instagram foi atendido
});

// Adicionar evento de clique ao link para o google (caractere)
const linkGoogle = document.getElementById("linkGoogle");
linkGoogle.addEventListener("click", function () {
    requisitos.google = true; // Define que o requisito do google foi atendido
});

// Adicionar evento de clique ao link para o facebook (caractere)
const linkFacebook = document.getElementById("linkFacebook");
linkFacebook.addEventListener("click", function () {
    requisitos.facebook = true; // Define que o requisito do facebook foi atendido
});
