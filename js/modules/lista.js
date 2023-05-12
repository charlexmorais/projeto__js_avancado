import {
  btnCancelmodaldelete,
  btnCancelmodaledit,
  btnNo,
  btnSalve,
  btnYes,
  domainId,
} from "./constant.js";

import { updateURL } from "./editUrl.js";



import { cancelmodalDelete, cancelmodalEdit } from "./validation.js";
import { message } from "./copyclipboard.js";
import { deleteURLlist } from "./delete.js";
import { apikey } from "./config.js";


export function listShortLinks() {
  // listando links curtos
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `${apikey}`,
    },
  };

  fetch("https://api.short.io/api/links?domain_id=" + domainId, options)
    .then((response) => {
      if (response.ok && response.status === 200) {
        setTimeout(() => {
          message("success", "Lista  de links foi  atualizada.");
        }, 1000);
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
  // mostrando tabela de links
  const resultContainer = document.getElementById("resultLinks");
  let tableHTML = `<table><tr><th></th><th></th><th></th><th></th></tr>`;

  data.forEach((link) => {
    const shortURL = link.shortURL;
    const urlOriginal = link.originalURL;
    const createdAt = new Date(link.createdAt);
    const createdAtFormatted = `${createdAt.toLocaleDateString()} ${createdAt.toLocaleTimeString()}`;
    tableHTML += `<tr><td>${shortURL}</td><td>${urlOriginal}</td><td>${createdAtFormatted}</td><td><img src="../assets/img/edit.png" class="icon-conf edit-icon"style="width: 20px;" idstring="${link.idString}"" onclick="showingScreen()"> <img src="../assets/img/delete.png" class="icon-conf delete-icon" style="width: 20px;" idstring="${link.idString}"></td></tr>`;
  });
  tableHTML += `</table>`;
  resultContainer.innerHTML = tableHTML;

  const editIcons = document.querySelectorAll(".edit-icon");
  editIcons.forEach((editIcon) => {
    editIcon.addEventListener("click", () => {
      let idString = editIcon.getAttribute("idstring"); // id istring

      const urlOriginal = editIcon
        .closest("tr")
        .querySelector("td:nth-child(2)").textContent; // pegando link curto
      const shortURL = editIcon
        .closest("tr")
        .querySelector("td:nth-child(1)").textContent; // pegando pathSlug
      const pathSlug = editIcon
        .closest("tr")
        .querySelector("td:nth-child(1)").textContent;
      containereditUrl(shortURL, urlOriginal, pathSlug, idString);
    });
  });
  const deleteIcons = document.querySelectorAll(".delete-icon");
  deleteIcons.forEach((deleteIcon) => {
    deleteIcon.addEventListener("click", () => {
      let idString = deleteIcon.getAttribute("idstring"); // id istring

      const shortURL = deleteIcon
        .closest("tr")
        .querySelector("td:nth-child(1)").textContent; // pegando pathSlug

      containeredeleteUrl(idString, shortURL);
    });
  });
}

function containereditUrl(shortURL, originalURL, path, idString) {
  // mostrando modal editar url

  const sectionmodalEdit = document.querySelector(".modal-edit");
  const h4EditLink = sectionmodalEdit.querySelector("h4");
  h4EditLink.textContent = `Editando:${shortURL}`;

  const pathSlug = sectionmodalEdit.querySelector(".path-Slug");
  pathSlug.value = path.split("/").pop();

  const urlOriginalInput = sectionmodalEdit.querySelector(".original-edit");
  urlOriginalInput.value = originalURL;

  sectionmodalEdit.classList.remove("hidden");

  btnSalve.onclick = () =>
    updateURL(urlOriginalInput.value, pathSlug.value, idString);

  btnCancelmodaledit.addEventListener("click", cancelmodalEdit); // cancelando modal editar
}

function containeredeleteUrl(idString, shortURL) {
  // mostrando modal delete url

  const sectionmodalDelete = document.querySelector(".modal-delete");
  const h4DeleteLink = sectionmodalDelete.querySelector("h4");
  h4DeleteLink.textContent = `Tem certeza que deseja excluir o link "${shortURL}"`;

  sectionmodalDelete.classList.remove("hidden");
  btnYes.onclick = () => {
    sectionmodalDelete.classList.add("hidden");
    deleteURLlist(idString, shortURL)
      message("success","link foi excluido da lista")
  };

  btnNo.onclick = () => {
    sectionmodalDelete.classList.add("hidden");
  };

  btnCancelmodaldelete.addEventListener("click", cancelmodalDelete); // cancelando modal editar
}
