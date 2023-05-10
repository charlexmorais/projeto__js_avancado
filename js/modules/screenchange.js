 // troca de telas

import {
  btnActions,
  btnShorten,
  btnsubmitContact,
  conteinerPng,
  inputWhastLink,
  linkInitial,
  loadIng,
  resultScreen,
  resultShares,
} from "./constant.js";

export async function statusChange() {
  // status de carregamento

  loadIng.classList.remove("hidden");
}
export function showButtons() {
  // mostrando botoes na tela e icone inicial - shortlink

  const buttons = document.querySelectorAll(".btn-shorten");
  linkInitial.classList.remove("hidden");
  buttons.forEach((button) => {
    button.classList.remove("hidden");
  });
}
export function pageInitial() {
  // voltando a tela inicial
  showingqrcode();
  hideQrcode();
  btnsubmitContact.classList.add("hidden"); //ocultando btnValidat
  inputWhastLink.classList.add("hidden"); // ocultando input de envio de contato whatsapp
  loadIng.classList.add("hidden"); // ocultando carregamento
  linkInitial.classList.add("hidden"); // ocultando icone inicio
  resultScreen.classList.add("hidden"); // ocultando url
  btnActions.classList.add("hidden"); // ocultando botoes de acoes
  conteinerPng.classList.add("hidden"); // ocultando qr code

  if (Array.isArray(btnActions)) {
    btnActions.forEach((button) => {
      button.classList.add("hidden");
    });
  } else {
    btnActions.classList.add("hidden");
  }

  btnShorten.classList.remove("hidden");
}

export function showingScreen() {
  // mostra todos os elementos ocultos anteriormente

  loadIng.classList.remove("hidden"); //mostrando  status carregamento
  linkInitial.classList.remove("hidden"); //mostrando  link de inicio de pagina
  resultScreen.classList.remove("hidden"); //mostrando  url encurtada
  btnActions.classList.remove("hidden"); //mostrando  todos dos botoes

  if (Array.isArray(btnActions)) {
    btnActions.forEach((button) => {
      button.classList.remove("hidden");
    });
  } else {
    btnActions.classList.remove("hidden");
  }

  btnShorten.classList.remove("hidden");
}

export function showingqrcode() {
  // ocultando botoes e icones

  hideQrcode(); // mostrando qr code na tela
  btnsubmitContact.classList.add("hidden"); // ocultando botao de envio de contato
  inputWhastLink.classList.add("hidden"); // ocultando input de envio de contato whatsapp
  resultShares.classList.add("hidden"); // conteiner de icones whatsAp,linkedin,twitter
  const buttons = document.querySelectorAll(".btn-shorten");
  buttons.forEach((button) => {
    button.classList.add("hidden");
  });
}

export function showShareIcons() {
  // mostrando icones whats ,linkedin , twitter

  resultShares.classList.remove("hidden");
  btnShorten.classList.add("hidden");
}
export function hideQrcode() {
  // mostrando qr code na tela
  conteinerPng.classList.remove("hidden");
}
