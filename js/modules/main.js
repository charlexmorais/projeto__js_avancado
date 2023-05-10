
import { copyToClipboard } from "../copyclipboard.js";
import {
  btnQrcode,
  btnSharing,
  btnValidation,
  btncopying,
  btnlistTable,
  inputField,
  linkInitial,
  linkedinLink,
  logoPageone,
  logoPagetwo,
  sectionpageHome,
  sectiontablelink,
  twitterLink,
  whatsAppBtn,
  whatsLink,
} from "./constant.js";

import { getDataDomain } from "./domainlist.mjs";
import { listShortLinks } from "./listaUrl.js";


import { postQrcode } from "./qrcode.mjs";
import { pageInitial, showShareIcons, showingqrcode } from "./screenchange.js";
import {
  copyShortURL,
  share,
  shareLinkedIn,
  shareTwitter,
  showWhatsAppInput,
} from "./shareurl.js";
import { postDataLink } from "./shortlink.mjs";
import { checkValidation } from "./validation.js";


logoPageone.addEventListener("click", pageInitial); // voltando a pagina1


const buttonShortenLink = document.querySelector("#btn-shorten");

getDataDomain(); //obter domínio de dados

buttonShortenLink.addEventListener("click", () => postDataLink());

inputField.addEventListener("input", () => {
  checkValidation();
});

const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  postDataLink();
});
// define the copyShortURL() and copyToClipboard() functions here

// add a click event listener to the copy button

btncopying.addEventListener("click", () => {
  const shortURL = copyShortURL(); // get the short URL
  copyToClipboard(shortURL); // copy the short URL to clipboard
});

linkInitial.addEventListener("click", pageInitial); // // referente ao icone de inicio de tela
btnSharing.addEventListener("click", showShareIcons, share); // botao compartilhar

whatsLink.addEventListener("click", function () {
  // openlinkinBrowser("https://web.whatsapp.com/");
});

linkedinLink.addEventListener("click", function () {
  shareLinkedIn();
});

twitterLink.addEventListener("click", function () {
  shareTwitter();
});

whatsAppBtn.addEventListener("click", showWhatsAppInput); // abrindo input de prenchimento

btnValidation.addEventListener("click", share); // botao de envio  de contato whatsApp

btnQrcode.addEventListener("click", () => {
  postQrcode();
  showingqrcode();
});

btnlistTable.addEventListener("click", () => {
  
  if (sectionpageHome.classList.contains("hidden")) {
    // if the table page is hidden, show it and hide the home page
    sectionpageHome.classList.remove("hidden");
    sectiontablelink.classList.add("hidden");
  } else {
    // if the home page is hidden, show it and hide the table page
    sectionpageHome.classList.add("hidden");
    listShortLinks()
    sectiontablelink.classList.remove("hidden");
  }
});
logoPagetwo.addEventListener("click", () => {
  
  if (sectionpageHome.classList.contains("hidden")) {
    // if the table page is hidden, show it and hide the home page
    sectionpageHome.classList.remove("hidden");
    sectiontablelink.classList.add("hidden");
  } else {
    // if the home page is hidden, show it and hide the table page
    sectionpageHome.classList.add("hidden");
    sectiontablelink.classList.remove("hidden");
  }
});

