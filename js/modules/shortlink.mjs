import { message } from "../../copyclipboard.js";
import {  shortenUrl, showButtons, statusChange } from "./screenchange.js";
import {
  clearForm,

} from "./validation.js";

export async function postDataLink() {
  statusChange(); // mostrando status de carregamento
  const urlInput = document.getElementById("input-field").value;
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: "sk_cLUlPAw7VcmekH0r",
    },
    body: JSON.stringify({
      domain: "91ng.short.gy",
      originalURL: urlInput,
    }),
  };

  fetch("https://api.short.io/links", options)
    .then((response) => {
      if (response.ok && response.status === 200) {
        message(
          "success",
          "URL foi encurtado com sucesso. Clique em Copiar ou CTRL + C para copiá-lo."
        );
        return response.json();
      } else {
        message("error", "Falha ao encurtar  a Url");
        throw new Error("Falha ao consultar a API");
      }
    })
    .then((data) => {
      console.log(data);
      const shortURL = data.shortURL;
      const updatedAt = new Date(data.updatedAt); // data atual
      const updatedAtFormatted = `${updatedAt.toLocaleDateString()} ${updatedAt.toLocaleTimeString()}`;
      const resultContainer = document.getElementById("result-container");
      resultContainer.innerHTML = ` URL: ${shortURL}<br>Link criado em: ${updatedAtFormatted}`;
      clearForm(); // limpando formulario

      showButtons(); // mostrando botoes na tela e icone inicial
      shortenUrl(); // alternando telas
      
    })

    .catch((error) => {
      if (error.response && error.response.status === 409) {
        console.error("Já existe um link com esse nome ou URL");
        z;
      } else {
        console.error(error);
      }
    });
}
