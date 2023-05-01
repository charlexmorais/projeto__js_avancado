
import { btncopying, inputField } from "./constant.js"
import { getDataDomain } from "./domainlist.mjs"
import { postDataLink } from "./shortlink.mjs"
import { checkValidation,copyShortURL, } from "./tools.js"

const buttonShortenLink=document.querySelector("#btn-shorten")
getDataDomain()


buttonShortenLink.addEventListener("click",()=>postDataLink()) 
 
inputField.addEventListener("input", checkValidation);

const form = document.querySelector('#form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // evita o comportamento padrão do formulário
  postDataLink();
});


btncopying.addEventListener('click',copyShortURL);


