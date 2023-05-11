
import { btnShorten, inputField,  } from "./constant.js";


export function checkValidation() { // validacao para url 
  const urlPattern = /^((http|https):\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
  
// desativando o botão encurtar quando o campo de entrada está vazio ou não corresponde ao padrão de URL
  if (inputField.value === "" || !urlPattern.test(inputField.value)) {
    btnShorten.disabled = true;
  } else {
    btnShorten.disabled = false;
  }
}

// limpando campo de input
export function clearForm() {
  inputField.value = "";
}
export function cancelmodalEdit() {
  const sectionEdit = document.querySelector(".modal-edit");
  sectionEdit.classList.add("hidden");
  
}
export function cancelmodalDelete() {
  const sectionDelete = document.querySelector(".modal-delete");
  sectionDelete.classList.add("hidden");
}



