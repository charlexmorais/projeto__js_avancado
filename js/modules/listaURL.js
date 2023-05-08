import { message } from "../../copyclipboard.js";

export function listShortLinks() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "sk_cLUlPAw7VcmekH0r",
    },
  };

  fetch(
    "https://api.short.io/api/links?domain_id=707808&limit=30&dateSortOrder=desc",
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
      // console.log(data);
      exibeTabela(data.links)
      // const resultContainer = document.getElementById("resultLinks");
      // let tableHTML = "<table><tr><th>Short URL</th><th>Original URL</th><th>Created At</th></tr>";
      // if (Array.isArray(data)) {
      //   data.forEach((link) => {
      //     const shortURL = link.shortURL;
      //     const urlOriginal = link.longUrl;
      //     const createdAt = new Date(link.creationDate);
      //     const createdAtFormatted = `${createdAt.toLocaleDateString()} ${createdAt.toLocaleTimeString()}`;
      //     tableHTML += `<tr><td>${shortURL}</td><td>${urlOriginal}</td><td>${createdAtFormatted}</td></tr>`;
      //   });
      //   tableHTML += "</table>";
      //   resultContainer.innerHTML = tableHTML;
      // } else {
      //   console.error("Data is not an array");
      // }
    })
    .catch((error) => {
      if (error.response && error.response.status === 409) {
        console.error("Já existe um link com esse nome ou URL");
      } else {
        console.error(error);
      }
    });
}
function exibeTabela(data) {
  console.log(data);
  const resultContainer = document.getElementById("resultLinks");
  let tableHTML =
    `<table><tr><th>Short URL</th><th>Original URL</th><th>Created At</th><th></th></tr>`;


  data.forEach((link) => {
    const shortURL = link.shortURL;
    const urlOriginal = link.originalURL;
    const createdAt = new Date(link.createdAt);
    const createdAtFormatted = `${createdAt.toLocaleDateString()} ${createdAt.toLocaleTimeString()}`;
    tableHTML += `<tr><td>${shortURL}</td><td>${urlOriginal}</td><td>${createdAtFormatted}</td><td><img src="../assets/img/edit.png" class="icon-conf edit-icon" style="width: 20px;" idstring="${link.idString}"> <img src="../assets/img/delete.png" class="icon-conf delete-icon" style="width: 20px;" idstring="${link.idString}"></td></tr>`;
  });
  tableHTML += `</table>`;
  resultContainer.innerHTML = tableHTML;
  // chamada da funcao
}



// export const btnEditar =document.querySelectorAll("")
// export const btnDelete =document.querySelectorAll("")

// {/* <td><img src="assets/icon/conf/edit.png" class="icon-conf edit-icon" style="width: 20px;" idstring="${element.idString}"> <img src="assets/icon/conf/del.png" class="icon-conf delete-icon" style="width: 20px;" idstring="${element.idString}"></td>  */}