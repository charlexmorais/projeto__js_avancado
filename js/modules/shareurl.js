import { message } from "../copyclipboard.js";




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
  
  export function shareOnWhatsApp() { // enviando url para contato
    const phoneNumber = document.getElementById("phone").value;
  
    if (phoneNumber.trim() === "") {
      message("error", "Por favor, preencha o número de telefone.");
      return;
    }
  
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
  