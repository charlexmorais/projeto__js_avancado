import {
  btnActions,
  btnShorten,
  inputField,
  linkInitial,
  loadIng,
  resultScreen,
  resultShares,
 
  
} from "./constant.js";

export async function statusChange() {
  // status de carregamento
  loadIng.classList.remove("hidden");
}

export function checkValidation() {
  // desbilitando botao , quando nao tem valor no input
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
  const buttons = document.querySelectorAll(".btn-shorten");
  linkInitial.classList.remove("hidden")
  buttons.forEach((button) => {
    button.classList.remove("hidden");
  });
}



export function message(tipo, mensagem) {
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
  // copiando url
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
  // copiando url
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



export function copyShortURL() {
  const resultContainer = document.getElementById("result-container");
  const shortURL = document
    .getElementById("result-container")
    .textContent.match(/(http|https):\/\/[^\s]+/)[0]
    .replace("Link", ""); // extrai somente a URL encurtada da página
  copyToClipboard(shortURL); // chama a função copyToClipboard() para copiar a URL encurtada para a área de transferência
}
export function pageInitial() {
  loadIng.classList.add("hidden");
  linkInitial.classList.add("hidden");
  resultScreen.classList.toggle("hidden");
  btnActions.classList.add("hidden");

  if (Array.isArray(btnActions)) {
    btnActions.forEach((button) => {
      button.classList.add("hidden");
    });
  } else {
    btnActions.classList.add("hidden");
  }

  btnShorten.classList.remove("hidden");
  location.reload();
}

export function showShareIcons() {

  resultShares.classList.remove("hidden");
  
}

export function share() {
  showShareIcons()
  const resultContainer = document.getElementById("result-container");
  const shortURL = resultContainer.textContent
    .match(/(http|https):\/\/[^\s]+/)[0]
    .replace("Link", "");
  copy(shortURL);
  
}

export function openlinkinBrowser(shortURL) {
  window.open(shortURL, "_blank");
}
export function showWhatsAppInput() {
  const inputWhatsApp = document.querySelector(".input-whats");
  inputWhatsApp.classList.remove("hidden");
  const sharingInput = inputWhatsApp.querySelector(".sharing-input");
  sharingInput.classList.remove("hidden");
  const btnShipping = inputWhatsApp.querySelector("#btn-shipping");
  btnShipping.classList.remove("hidden");
}

export function sendToWhats() {
  const phone = document.getElementById("phone").value;
  if (phone === "") {
      message("error", "Campo de telefone vazio");
  } else {
      const url = "https://api.whatsapp.com/send?phone=" + phone;
      window.open(url, "_blank");
      document.getElementById("phone").value = "";
      message("success", "Compartilhado no WhatsApp com sucesso");
  }
}
