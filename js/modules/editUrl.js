
import { apikey } from "../../config.js";
import { message } from "../copyclipboard.js";
import { listShortLinks } from "./listaUrl.js";



export function updateURL(urlOriginal, pathSlug,idString) { // editando url
  console.log(idString)
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization:`${apikey}`,
    },
    body: JSON.stringify({originalURL: urlOriginal, path: pathSlug})
  };
  fetch(`https://api.short.io/links/${idString}`, options)
    .then((response) => {
      if (response.ok && response.status === 200) {
        message("success", "Link atualizado com sucesso.");
        return response.json();
      } else {
        message("error", "Falha ao atualizar link.");
        throw new Error("Falha ao consultar a API");
      }
    })
    .then((data) => {
      listShortLinks()
      
    })
    .catch((error) => {
      if (error.response && error.response.status === 409) {
        console.error("Já existe um link com esse nome ou URL");
      } else {
        console.error(error);
      }
    });
}
