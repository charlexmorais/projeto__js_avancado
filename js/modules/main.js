import {  backPage, btnSharing, btnValidacao, btncopying, homePage, inputField, linkedinLink,twitterLink, whatsAppBtn, whatsLink } from "./constant.js";
import { getDataDomain } from "./domainlist.mjs";
import { postDataLink } from "./shortlink.mjs";
import { checkValidation,    copyShortURL,   message,     pageInitial, sendToWhats, share, showWhatsAppInput,  } from "./tools.js";


backPage.addEventListener("click",pageInitial)
const buttonShortenLink = document.querySelector("#btn-shorten");
getDataDomain();

buttonShortenLink.addEventListener("click", () => postDataLink());

inputField.addEventListener("input", checkValidation);

const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  postDataLink();
});


btncopying.addEventListener("click", copyShortURL);
homePage.addEventListener("click",pageInitial)
btnSharing.addEventListener("click",share)


whatsLink.addEventListener("click", function() {
  
  // openlinkinBrowser("https://web.whatsapp.com/");
  
});

linkedinLink.addEventListener("click", function() {
  const linkedin = "https://www.linkedin.com/";
  const newWindow = window.open(linkedin, "_blank");
  if (newWindow) {
    message("success", "Link aberto com sucesso no LinkedIn!");
  } else {
    message("error", "Erro ao abrir o link no LinkedIn");
  }
});

twitterLink.addEventListener("click", function() {
  const twitter ="https://twitter.com/";
  const newOpen =window.open(twitter ,"_blank");
  if (newOpen) {
    message("success", "Link aberto com sucesso no twitter!");
  } else {
    message("error", "Erro ao abrir o link no LinkedIn");
  }
  
});

whatsAppBtn.addEventListener('click',showWhatsAppInput)
btnValidacao.addEventListener("click",sendToWhats)


      