import { copyToClipboard } from "../copyclipboard.js";
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
  sharingInput,
} from "./constant.js";

import { getDataDomain } from "./domainlist.mjs";
import { listShortLinks } from "./listaUrl.js";

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

logoPageone.addEventListener("click", pageInitial); // voltando a pagina1

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
    listShortLinks(); // // listando links curtos
    sectionTablelink.classList.remove("hidden");
  }
});
logoPagetwo.addEventListener("click", () => {
  if (sectionpageHome.classList.contains("hidden")) {
    sectionpageHome.classList.remove("hidden");
    sectionTablelink.classList.add("hidden");
  } else {
    sectionpageHome.classList.add("hidden");
    sectionTablelink.classList.remove("hidden");
  }
});
