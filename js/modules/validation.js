import { btnShorten, inputField, } from "./constant.js";

export function checkValidation() {
  // desbilitando botao encurtar  , quando nao tem valor no input
  if (inputField.value === "") {
    btnShorten.disabled = true;
  } else {
    btnShorten.disabled = false;
  }
}
// limpando campo de input
export function clearForm() {
  inputField.value = "";
}
export function cancelmodalEdit(){
  const sectionEdit = document.querySelector(".modal-edit");
  sectionEdit.classList.add("hidden");
}
export function cancelmodalDelete(){
  const sectionDelete= document.querySelector(".modal-delete");
  sectionDelete.classList.add("hidden");
}
