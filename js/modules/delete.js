import { apikey } from "./config.js";
import { message } from "./copyclipboard.js";
import { listShortLinks } from "./listaURL.js";

export function deleteURLlist(idString) {
  const options = {
    method: "DELETE",
    headers: {
      Authorization: `${apikey}`,
    },
  };

  fetch(`https://api.short.io/links/${idString}`, options)
    .then((response) => {
      if (response.ok && response.status === 200) {
        message("success", "Link excluido com sucesso.");
        return response.json();
      } else {
        message("error", "Falha ao excluir link.");
        throw new Error("Falha ao consultar a API");
      }
    })
    .then((data) => {
      listShortLinks();
    })
    .catch((error) => {
      if (error.response && error.response.status === 409) {
        console.error("Já existe um link com esse nome ou URL");
      } else {
        console.error(error);
      }
    });
}
