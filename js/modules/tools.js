import {
  btnActionsicon,
  btnShorten,
  btnShortenActions,
  inputField,
  linkInitial,
  loadIng,
  urlDiv,
} from "./constant.js";

export async function statusChange() {
  // alterando status de carregamento
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
export function statusInitial() {
  // alterando status de carregamento de botoes na pagina

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
  }, 4000);
}
export function copyToClipboard(short) {
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

export function copyShortURL() {
  const resultContainer = document.getElementById("result-container");
  const shortURL = document
    .getElementById("result-container")
    .textContent.match(/(http|https):\/\/[^\s]+/)[0]
    .replace("Link", ""); // extrai somente a URL encurtada da página
  copyToClipboard(shortURL); // chama a função copyToClipboard() para copiar a URL encurtada para a área de transferência
}
export function pageInitial(){
  loadIng.classList.add("hidden");
  linkInitial.classList.add("hidden");
  urlDiv.classList.toggle("hidden"); // utiliza toggle() para alternar a classe hidden
  // shares.classList.add("hidden");
  btnActionsicon.classList.add("hidden");
  btnShortenActions.forEach((button) => {
    button.classList.add("hidden");
  });
  btnShorten.classList.remove("hidden");
  location.reload();
}

