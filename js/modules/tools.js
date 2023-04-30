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
export function copyURL() {
  var url = window.location.href; // obtém a URL atual
  navigator.clipboard.writeText(url); // copia a URL para a área de transferência
  menssage("success","URL copiado para a área de transferência!"); // exibe uma mensagem de confirmação
}


export function menssage(tipo, mensagem) {
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
  // funciona 
// export function copyInputValue() {
//   var inputfield = document.getElementById("inputfield"); // get the input field by ID
//   var inputValue = inputfield.value; // get the value of the input field
//   navigator.clipboard.writeText(inputValue); // copy the input value to the user's clipboard
//   message("success", "Valor copiado para a área de transferência!"); // display a success message to the user
// }
