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

// const array =[]

// export const tableOrderView = () => {
//   resultContainer.innerHTML = "";
//   array.forEach((item) => {
//     resultContainer.innerHTML += `<tr>
//                           <td>${item.}</td>
//                           <td>${item.}</td>
//                           <td>${item.qty}</td>
//                           <td>R$ ${item.price}</td>
//                         </tr>`;
//   }); // It loops through the filled array and puts the data in the HTML
// };
