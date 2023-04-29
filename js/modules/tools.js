import {  btnActionsicon, btnShorten, btnShortenActions, inputField, linkInitial, loadIng, } from "./constant.js";

export function statusChange() { // alterando status de carregamento 
  
  loadIng.classList.remove("hidden");
  loadIng.classList.remove("hidden");
}

export function checkValidation() { // chevando campo de input 
  if (inputField.value === "") {
    btnShorten.disabled = true;
  } else {
    btnShorten.disabled = false;
  }
}

export function clearForm() {
    inputField.value = "";
  
  }
  export function statusInitial() { // alterando status de carregamento 
  
    linkInitial.classList.remove("hidden");
    // shares.classList.remove("hidden");
    btnActionsicon.classList.remove('hidden');
  btnShortenActions.forEach(button => {
    button.classList.remove('hidden');
  });
  
  }
  

  
 
  