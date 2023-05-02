import {  btnSharing, btncopying, btnshipping, homePage, inputField, linkedinLink,sharingInput, twitterLink, whatsAppBtn, whatsLink } from "./constant.js";
import { getDataDomain } from "./domainlist.mjs";
import { postDataLink } from "./shortlink.mjs";
import { checkValidation,  copyShortURL,  openlinkinBrowser,  pageInitial, sharing, } from "./tools.js";

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
btnSharing.addEventListener("click",sharing)


whatsLink.addEventListener("click", function() {
  
  // openlinkinBrowser("https://web.whatsapp.com/");
  
});

linkedinLink.addEventListener("click", function() {
  
  openlinkinBrowser("https://www.linkedin.com/");
});

twitterLink.addEventListener("click", function() {
  openlinkinBrowser("https://twitter.com/");
});

whatsAppBtn.addEventListener('click', function() {
  sharingInput.classList.toggle('hidden');
btnshipping.classList.toggle("hidden");
});


const buttonShipping = document.getElementById("btn-shipping");
buttonShipping.addEventListener("click", function() {
  const url = "https://web.whatsapp.com/";
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.click();
});

