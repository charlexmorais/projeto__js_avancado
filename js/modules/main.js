
import {
  btnSharing,
  btncopying,
  btnlistTable,
  buttonShortenLink,
  inputField,
  linkInitial,
  linkedinLink,
  logoPageone,
  logoPagetwo,
  sectionpageHome,
  sectionTablelink,
  twitterLink,
  whatsAppBtn,
  btnsubmitContact,
  conteinerPng,
  resultScreen,
  btnShorten,
 
} from "./constant.js";
import { copyToClipboard } from "./copyclipboard.js";

import { getDataDomain } from "./domainlist.mjs";
import { listShortLinks } from "./lista.js";


import { pageInitial, showShareIcons } from "./screenchange.js";
import {
  copyShortURL,
  shareLinkedIn,
  shareOnWhatsApp,
  shareTwitter,
  showWhatsAppInput,
} from "./shareurl.js";
import { postDataLink } from "./shortlink.mjs";
import { checkValidation,  } from "./validation.js";

logoPageone.addEventListener("click", pageInitial); // voltando a pagina
getDataDomain(); //obter domínio de dados

buttonShortenLink.addEventListener("click", () => postDataLink());

inputField.addEventListener("input", () => {
  checkValidation();
});
inputField.addEventListener("click", pageInitial);

btncopying.addEventListener("click", () => {
  const shortURL = copyShortURL(); //obtém a URL curta
  copyToClipboard(shortURL); // copia a URL curta para a área de transferência
});

linkInitial.addEventListener("click", pageInitial); // // referente ao icone de inicio de tela
btnSharing.addEventListener("click", showShareIcons, shareOnWhatsApp); // botao compartilhar

linkedinLink.addEventListener("click", function () {
  shareLinkedIn();
});

twitterLink.addEventListener("click", function () {
  shareTwitter();
});

whatsAppBtn.addEventListener("click", showWhatsAppInput); // abrindo input pra  prenchimento

btnsubmitContact.addEventListener("click", shareOnWhatsApp); // botao de envio  de contato whatsApp

btnlistTable.addEventListener("click", () => {
  if (sectionpageHome.classList.contains("hidden")) {
    sectionpageHome.classList.remove("hidden");
    sectionTablelink.classList.add("hidden");
  } else {
    sectionpageHome.classList.add("hidden");
    listShortLinks()
    sectionTablelink.classList.remove("hidden");
  }
});
logoPagetwo.addEventListener("click", () => {
  if (sectionpageHome.classList.contains("hidden")) {
    sectionpageHome.classList.remove("hidden");
    sectionTablelink.classList.add("hidden");
    conteinerPng.classList.add("hidden")
    resultScreen.classList.add("hidden")
    btnShorten.classList.remove("hidden")
    linkInitial.classList.add("hidden")
    
  } else {
    sectionpageHome.classList.add("hidden");
    sectionTablelink.classList.remove("hidden");
  }
});
