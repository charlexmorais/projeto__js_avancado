
import {  backPage, btnQrcode, btnSharing, btnValidacao, btncopying,inputField, linkInitial, linkedinLink,twitterLink, whatsAppBtn, whatsLink } from "./constant.js";
import { getDataDomain } from "./domainlist.mjs";
import { postQrcode } from "./qrcode.mjs";
import { postDataLink } from "./shortlink.mjs";
import { checkValidation,  copyShortURL,  copyToClipboard,  pageInitial, share,shareLinkedIn,shareTwitter,showShareIcons, showWhatsAppInput, showingqrcode,  } from "./tools.js";


backPage.addEventListener("click",pageInitial) // voltando a pagina inicial

const buttonShortenLink = document.querySelector("#btn-shorten");

getDataDomain();

buttonShortenLink.addEventListener("click", () => postDataLink());

inputField.addEventListener("input", checkValidation);

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


linkInitial.addEventListener("click",pageInitial) // // referente ao icone de inicio de tela
btnSharing.addEventListener("click",showShareIcons,share) // botao compartilhar


whatsLink.addEventListener("click", function() {
  
  // openlinkinBrowser("https://web.whatsapp.com/");
  
});

linkedinLink.addEventListener("click", function() {
shareLinkedIn()

})

twitterLink.addEventListener("click", function() {
 shareTwitter()
  
});

whatsAppBtn.addEventListener('click',showWhatsAppInput) // abrindo input de prenchimento 

btnValidacao.addEventListener("click",share)// botao de envio  de contato whatsApp

btnQrcode.addEventListener('click', () => {
  postQrcode();
  showingqrcode();
});

