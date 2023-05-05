import {
  btnActions,
  btnShorten,
  inputField,
  linkInitial,
  loadIng,
  resultScreen,
  resultShares,
  shareButtons,
  
} from "./constant.js";
import { postDataLink } from "./shortlink.mjs";

export async function statusChange() {
  // status de carregamento
  loadIng.classList.remove("hidden");
}

export function checkValidation() {
  // desbilitando botao encurtar  , quando nao tem valor no input
  if (inputField.value === "") {
    btnShorten.disabled = true;
  } else {
    btnShorten.disabled = false;
  }
}
// limpando campo de input
export function clearForm() {
  inputField.value = "";
}

export function showButtons() {
  // mostrando botoes na tela e icone inicial
  const buttons = document.querySelectorAll(".btn-shorten");
  linkInitial.classList.remove("hidden");
  buttons.forEach((button) => {
    button.classList.remove("hidden");
  });
}

export function message(tipo, mensagem) {
  //  funca pra retorno de mensagem
  // mensagens de erro e sucesso
  // argumentos tipo e mensagem
  const alertaMensagem = document.createElement("div");
  alertaMensagem.textContent = mensagem;
  alertaMensagem.className = tipo;
  document.body.appendChild(alertaMensagem); // adiciona elemento na pagina
  setTimeout(function () {
    // adicionado tempo e removendo
    alertaMensagem.style.opacity = "0";
    setTimeout(function () {
      document.body.removeChild(alertaMensagem);
    }, 2000);
  }, 3000);
}
export function copyToClipboard(short) {
  // copiando url para area de transferencia

  navigator.clipboard.writeText(short).then(
    () => {
      console.log(`Copiado: ${short}`);
      message("success", "Url copiada com sucesso");
    },
    (err) => {
      console.error(`Falha na cópia: ${err}`);
      message("error", "Falha na cópia");
    }
  );
}
export function copy(short) {
  // funcionalidade para o botao compartilhar

  navigator.clipboard.writeText(short).then(
    () => {
      console.log(`Copiado: ${short}`);
      message("success", "compartilhe a sua url clicando nos icones");
    },
    (err) => {
      console.error(`Falha na cópia: ${err}`);
      message("error", "erro ao compartilhar ");
    }
  );
}

export function pageInitial() {
  // voltando a tela inicial
  loadIng.classList.add("hidden"); // ocultando div div
  linkInitial.classList.add("hidden"); // ocultando icone
  resultScreen.classList.toggle("hidden"); // ocultando url e data
  btnActions.classList.add("hidden"); // ocultando botoes de acoes

  if (Array.isArray(btnActions)) {
    btnActions.forEach((button) => {
      button.classList.add("hidden");
    });
  } else {
    btnActions.classList.add("hidden");
  }

  btnShorten.classList.remove("hidden");
  hiddenQrcode()
  
}
export function showingqrcode() {
  // mostrando qr code na tela
  resultShares.classList.add("hidden")
  const buttons = document.querySelectorAll(".btn-shorten");
  buttons.forEach((button) => {
    button.classList.add("hidden");
  });
}

export function showShareIcons() {
  // mostrando icones whats ,linkedin , twitter
  resultShares.classList.remove("hidden");
}

export function openlinkinBrowser(shortURL) {
  // abre navegador
  window.open(shortURL, "_blank");
}
export function showWhatsAppInput() {
  // abrindo campo de preenchimento de contato no whatsApp
  const inputWhatsApp = document.querySelector(".input-whats");
  inputWhatsApp.classList.remove("hidden");
  const sharingInput = inputWhatsApp.querySelector(".sharing-input");
  sharingInput.classList.remove("hidden");
  const btnShipping = inputWhatsApp.querySelector("#btn-shipping");
  btnShipping.classList.remove("hidden");
}
export function copyShortURL() {
  // pegando valor url
  const resultContainer = document.getElementById("result-container");
  const shortURL = document
    .getElementById("result-container")
    .textContent.match(/(http|https):\/\/[^\s]+/)[0]
    .replace("Link", ""); // extrai somente a URL encurtada da página
  return shortURL; // retorna a URL encurtada
  
}

export function share() {
  // compartilhando o link encurtado no whatsApp
  const phoneNumber = document.getElementById("phone").value;

  const resultContainer = document.getElementById("result-container");
  const shortURL = resultContainer.textContent
    .match(/(http|https):\/\/[^\s]+/)[0]
    .replace("Link", "");
  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=" +
    encodeURIComponent(phoneNumber) +
    "&text=" +
    encodeURIComponent(shortURL);
  window.open(whatsappUrl, "_blank");
  if (whatsappUrl) {
    message("success", "Conteúdo compartilhado com sucesso!");
  } else {
    message(
      "error",
      "Não foi possível compartilhar o conteúdo. Verifique se o bloqueador de pop-ups está desativado."
    );
  }
}

export function shareLinkedIn(url) {
  // compartilhando  no linkedin
  var url = copyShortURL(url);
  var title = "Título da página a ser compartilhada";
  var summary = "Descrição da página a ser compartilhada";
  var source = "Nome do site ou empresa";
  var description = "Descrição do conteúdo compartilhado";

  var shareWindow = window.open(
    "https://www.linkedin.com/shareArticle?mini=true&url=" +
      encodeURIComponent(url) +
      "&title=" +
      encodeURIComponent(title) +
      "&summary=" +
      encodeURIComponent(summary) +
      "&source=" +
      encodeURIComponent(source) +
      "&description=" +
      encodeURIComponent(description)
  );

  if (shareWindow) {
    message("success", "Conteúdo compartilhado com sucesso!");
  } else {
    message(
      "error",
      "Não foi possível compartilhar o conteúdo. Verifique se o bloqueador de pop-ups está desativado."
    );
  }
}

export function shareTwitter(url) {
  var url = copyShortURL(url); // obtém a URL encurtada gerada pela função copyShortURL()
  var text = "Texto do tweet";
  var hashtags = "hashtag1,hashtag2";
  var via = "nome_do_usuário";

  // Abra a janela de compartilhamento do Twitter
  window.open(
    "https://twitter.com/share?url=" +
      encodeURIComponent(url) +
      "&text=" +
      encodeURIComponent(text) +
      "&hashtags=" +
      encodeURIComponent(hashtags) +
      "&via=" +
      encodeURIComponent(via)
  );
  if (window) {
    message("success", "Conteúdo compartilhado com sucesso!");
  } else {
    message(
      "error",
      "Não foi possível compartilhar o conteúdo. Verifique se o bloqueador de pop-ups está desativado."
    );
  }
}


export function hiddenQrcode() {
  
  const qrCodeContainer = document.getElementById("your-container");
  if (qrCodeContainer) {
    qrCodeContainer.classList.remove("hidden");
    resultScreen.classList.remove("hidden")
    resultShares.classList.add("hidden")
  }
}
