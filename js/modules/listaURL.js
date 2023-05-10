

import { message } from "../copyclipboard.js";
import { btnCancelmodaldelete, btnCancelmodaledit, btnNo, btnSalve, btnYes, domainId } from "./constant.js";
import { deleteURLlist } from "./delete.js";
import { updateURL } from "./editUrl.js";
import { postQrcode } from "./qrcode.mjs";


import { cancelmodalDelete, cancelmodalEdit } from "./validation.js";


export function listShortLinks() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "sk_cLUlPAw7VcmekH0r",
    },
  };

  fetch(
    "https://api.short.io/api/links?domain_id="+domainId,
    options
  )
    .then((response) => {
      if (response.ok && response.status === 200) {
        message("success", "Lista  de links foi  carregada com sucesso.");
        return response.json();
      } else {
        message("error", "Falha ao carregar lista de links.");
        throw new Error("Falha ao consultar a API");
      }
    })
    .then((data) => {
     
      displayTable(data.links);
    })
    .catch((error) => {
      if (error.response && error.response.status === 409) {
        console.error("Já existe um link com esse nome ou URL");
      } else {
        console.error(error);
      }
    });
}
export function displayTable(data) {
  
  const resultContainer = document.getElementById("resultLinks");
  let tableHTML = `<table><tr><th>Short URL</th><th>Original URL</th><th>Created At</th><th></th></tr>`;

  data.forEach((link) => {
    const shortURL = link.shortURL;
    const urlOriginal = link.originalURL;
    const createdAt = new Date(link.createdAt);
    const createdAtFormatted = `${createdAt.toLocaleDateString()} ${createdAt.toLocaleTimeString()}`;
    tableHTML += `<tr><td>${shortURL}</td><td>${urlOriginal}</td><td>${createdAtFormatted}</td><td><img src="../assets/img/edit.png" class="icon-conf edit-icon" style="width: 20px;" idstring="${link.idString}"> <img src="../assets/img/delete.png" class="icon-conf delete-icon" style="width: 20px;" idstring="${link.idString}"></td></tr>`;
  });
  tableHTML += `</table>`;
  resultContainer.innerHTML = tableHTML;

  const editIcons = document.querySelectorAll(".edit-icon"); // clique no icone edit
  editIcons.forEach((editIcon) => {
    editIcon.addEventListener("click", () => {
      let  idString = editIcon.getAttribute("idstring");
    
      
      const urlOriginal = editIcon
        .closest("tr")
        .querySelector("td:nth-child(2)").textContent; // pegando link
      const shortURL = editIcon
        .closest("tr")
        .querySelector("td:nth-child(1)").textContent; // pegando pathSlug
      const pathSlug = editIcon
        .closest("tr")
        .querySelector("td:nth-child(1)").textContent;
      containereditUrl(shortURL, urlOriginal, pathSlug,idString);
      
     
    });
  });
  const deleteIcons = document.querySelectorAll(".delete-icon"); // clique no icone edit
  deleteIcons.forEach((deleteIcon) => {
    deleteIcon.addEventListener("click", () => {
      let  idString =deleteIcon.getAttribute("idstring");
      
      const shortURL = deleteIcon
        .closest("tr")
        
      
      containeredeleteUrl(idString)
      postQrcode(idString)
     
    });
  });
}

function containereditUrl(shortURL, originalURL, path,idString) {
  // mostrando modal editar url
  
  const sectionmodalEdit = document.querySelector(".modal-edit");
  const h4EditLink = sectionmodalEdit.querySelector("h4");
  h4EditLink.textContent = `Editando:${shortURL}`;

  const pathSlug = sectionmodalEdit.querySelector(".path-Slug");
  pathSlug.value = path.split("/").pop();

  const urlOriginalInput = sectionmodalEdit.querySelector(".original-edit");
  urlOriginalInput.value = originalURL;

  sectionmodalEdit.classList.remove("hidden");
  

  btnSalve.onclick= ()=>updateURL( urlOriginalInput.value, pathSlug.value ,idString)
  
btnCancelmodaledit.addEventListener("click",cancelmodalEdit)

}

function containeredeleteUrl(idString) {
  // mostrando modal delete url
  
  const sectionmodalDelete = document.querySelector(".modal-delete");
  const h4DeleteLink = sectionmodalDelete.querySelector("h4");
  h4DeleteLink.textContent = `${idString}`;

  sectionmodalDelete.classList.remove("hidden");
  
  btnYes.onclick= ()=>deleteURLlist(idString)
   

  btnNo.onclick = () => {
    sectionmodalDelete.classList.add("hidden");
  };
  
  
  
  btnCancelmodaldelete.addEventListener("click",cancelmodalDelete)
}

