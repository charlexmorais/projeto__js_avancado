import {
  btnActionsicon,
  btnShorten,
  btnShortenActions,
  inputField,
  linkInitial,
  loadIng,
} from "./constant.js";


export function statusChange() {
  // alterando status de carregamento
  loadIng.classList.remove("hidden");
  loadIng.classList.add("hidden");
}

export function checkValidation() {
  // chevando campo de input
  if (inputField.value === "") {
    btnShorten.disabled = true;
  } else {
    btnShorten.disabled = false;
  }
}

export function clearForm() {
  inputField.value = "";
}
export function statusInitial() {
  // alterando status de carregamento

  linkInitial.classList.remove("hidden");
  // shares.classList.remove("hidden");
  btnActionsicon.classList.remove("hidden");
  btnShortenActions.forEach((button) => {
    button.classList.remove("hidden");
  });
}


 export function message(tipo, mensagem) {
  // argumentos tipo e mensagem
  const alertaMensagem = document.createElement("div");
  alertaMensagem.textContent = mensagem;
  alertaMensagem.className = tipo; // atributo className em vez de classList
  document.body.appendChild(alertaMensagem); // adiciona elemento na pagina
  setTimeout(function () {
    // adicionado tempo e removendo
    alertaMensagem.style.opacity = "0";
    setTimeout(function () {
      document.body.removeChild(alertaMensagem);
    }, 2000);
  }, 1000);
}
export function copyToClipboard(short) {
  navigator.clipboard.writeText(short).then(() => {
    console.log(`Copiado: ${short}`);
  }, (err) => {
    console.error(`Falha na cópia: ${err}`);
  });
}

export function copyShortURL() {
  const resultContainer = document.getElementById("result-container");
  const shortURL = document.getElementById("result-container").textContent.match(/(http|https):\/\/[^\s]+/)[0]; // extrai somente a URL encurtada da página
  copyToClipboard(shortURL); // chama a função copyToClipboard() para copiar a URL encurtada para a área de transferência
}





  
  



